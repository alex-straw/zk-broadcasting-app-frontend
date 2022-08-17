import { Contract } from "ethers";
import poolFactoryAbi from '../../contracts/poolFactoryABI'
import poolAbi from '../../contracts/poolABI.json'
import React, {useState, useContext} from "react";
import { Button, LongTextBoxForOutput, LongTextBoxDetailNoMargin, LongInput, LongTextBox, LongTextBoxDetail, TinyInput, MidTextBoxDetail, LongerButton, SmallButton} from "../../component-styles/generic-styles"
import { CenterComponent, Title, LargeImage, BlackFullScreen, VerticalGap, WhiteTitle, Wrapper, TextBlock, WhiteText} from "../../component-styles/layout-styles";
import { UserContext } from "../../helpers/UserContext";
import { customAlphabet } from "nanoid";
import { ethers } from "ethers";
import { initialize } from 'zokrates-js';
// import provingKeyBuffer from './ProvingKeyBuffer.json'
import loading from '../../images/7S7P.gif'

const VerifyIdentityForm = () => {

    /* GENERATE NEW PASSWORD */
    const nanoid = customAlphabet('123456789abcdef', 64)
    const [poolName, setPoolName] = useState("pool-name...");

    const [preImage, setPreImage] = useState("[0, 0, 34252345..., 2345239845...]");
    const [preImageDecHash, setpreImageDecHash] = useState("**");
    const [preImageHexHash, setPreImageHexHash] = useState("**");

    const [memberNumber, setMemberNumber] = useState("1");
    const [newPassword, setNewPassord] = useState("0");
    const [newPasswordHash, setNewPasswordHash] = useState("")
    const [processing, setProcessing] = useState(false)
    const userContext = useContext(UserContext);
    const [poolAddress, setPoolAddress] = useState("");
    const [generatedProof, setGeneratedProof] = useState("");


    function generatePreImage() {
        return ethers.utils.hexlify("0x" + nanoid())
    };

    function sha256Hash(preImage) {
        return ethers.utils.soliditySha256(["int128", "int128", "int128", "int128"], [preImage[0], preImage[1], preImage[2], preImage[3]])
    };

    function addHexLetters(_str) {
        return "0x".concat(_str)
    };

    function padHex(_str, nBytes) {
        return ethers.utils.hexZeroPad(_str, nBytes)
    };

    function formatBytes32Hash(hashDigest) {

        let hashLength = hashDigest.length;

        let _h0pub = hashDigest.slice(2, (hashLength/2) + 1);
        let _h1pub = hashDigest.slice((hashLength/2) + 1, hashLength);

        _h0pub = addHexLetters(_h0pub)
        _h1pub = addHexLetters(_h1pub)

        let _h0pubPadded = padHex(_h0pub, 32)
        let _h1pubPadded = padHex(_h1pub, 32)

        return [_h0pubPadded, _h1pubPadded]
    };

    function formatHexToBigNumber(_formattedHexHashArray) {
        return [ethers.BigNumber.from(_formattedHexHashArray[0]).toString(), ethers.BigNumber.from(_formattedHexHashArray[1]).toString()]
    };

    function generateFormattedPreImage() {
        let preImage = generatePreImage()
        let preImageSetupInput = formatHexToBigNumber(formatBytes32Hash(preImage))
        let preImageFormatted = ["0", "0", preImageSetupInput[0], preImageSetupInput[1]]
        return preImageFormatted
    }

    function generateFormattedHashDigest(preImageFormatted) {
        let hashDigestHexFormatted = formatBytes32Hash(sha256Hash(preImageFormatted))
        let hashDigestDecFormatted = formatHexToBigNumber(hashDigestHexFormatted)
        const password = {
            'preImage' : preImageFormatted,
            'hexHash' : hashDigestHexFormatted,
            'decHash' : hashDigestDecFormatted
        }
        return password
    }

    function generateNewPasswordDetails() {
        let preImageFormatted = generateFormattedPreImage()
        let newPassword = generateFormattedHashDigest(preImageFormatted)
        setNewPassord(JSON.stringify(newPassword.preImage))
        setNewPasswordHash(newPassword.hexHash)
    }
    
    /* GENERATE PROOF AND SEND TX */

    function MetaMaskConnected() {
        if (!userContext.address) {
            return false
        } else {
            return true
        }   
    }

    async function getPoolAddress() {
        const poolFactory = new Contract( 
            "0xC6f319b5BE84B12C09F74e4eBa2A3cA60EFBbeF5",
            poolFactoryAbi,
            userContext.signer
        )
        try {
            return await poolFactory.getPoolAddress(poolName)
        } catch {
            return "0x0000000000000000000000000000000000000000"
        }
    }

    async function endProcess() {
        setProcessing(false);
        localStorage.clear();
    }

    async function generateProofSetup() {
                
        if (!MetaMaskConnected()) {
            alert("Please connect your Metamask. ")
        } else {
            const newPoolAddress = await getPoolAddress()
            if (newPoolAddress != "0x0000000000000000000000000000000000000000") {
                setProcessing(true);                

                const proof = await generateZokratesProof(newPoolAddress)

                const pool = new Contract( 
                    newPoolAddress,
                    poolAbi,
                    userContext.signer
                )
        
                const transaction = await pool.verifyId(
                    memberNumber, 
                    [await proof.proof.a, await proof.proof.b, await proof.proof.c],
                    newPasswordHash
                ) 

                await transaction.wait()

                await endProcess()
            } else {
                alert("Invalid pool name")
            }
        }
    }

    async function getProvingKeyFromS3() {
        return await fetch(process.env.REACT_APP_PROVING_KEY_URL)
        .then ((response) => response.json())
        .then (data => {
            return data
        })
    }

    async function generateZokratesProof() {

        const source = ` 
        
        import "hashes/sha256/512bitPacked" as sha256packed; \n

        def main(private field a, private field b, private field c, private field d, field h0Pub, field h1Pub) { \n
            field[2] hash_digest = sha256packed([a, b, c, d]); \n
            assert(hash_digest[0] == h0Pub); \n
            assert(hash_digest[1] == h1Pub); \n
            return; \n
        } 
        `

        const verificationPassword = generateFormattedHashDigest(JSON.parse(preImage))

        let h0pub = verificationPassword.decHash[0]
        let h1pub = verificationPassword.decHash[1]

        const pre = JSON.parse(preImage)

        const zokratesProvider = await initialize();

        const artifacts = zokratesProvider.compile(source);

        const { witness, output } = zokratesProvider.computeWitness(artifacts, [pre[0], pre[1], pre[2], pre[3], h0pub, h1pub]);
        
        const provingKeyBuffer = await getProvingKeyFromS3();

        return zokratesProvider.generateProof(artifacts.program, witness, await provingKeyBuffer.data); 
    }

    /* Show pre-image hash digest */

    function handlePreImageInput(_preImage) {
        setPreImage(_preImage)
        try {
            let preImageHash = generateFormattedHashDigest(JSON.parse(_preImage))
            setpreImageDecHash(preImageHash.decHash)
            setPreImageHexHash(preImageHash.hexHash)
        } catch {
            setpreImageDecHash("0")
        }
    }


    if (processing) {
        return(
            <BlackFullScreen>
            <WhiteTitle>
                <pre>
                    Generating Proof {"\n"} This could take up to 5 minutes.
                </pre>
            </WhiteTitle>
            <WhiteText> 
            What's going on? A proving key (53MB) has been downloaded into your browser's memory. 
                Your computer is currently creating a proof that you possess the hashed version of your private pre-image/password.  
                This hashed version of your password is stored on the blockchain, and this proof allows the smart contract to verify
                that you have the pre-image for this hash without exposing it (because Ethereum transactions are public). The resulting proof is very easy to verify on-chain, which makes it ideal for use 
                with blockchains. You must approve a MetaMask transaction when it completes. This pool will become operational after a certain 
                threshold of its users verify their membership. Storing your hash publicly on-chain is secure because it is virtually impossible (1 in 2^256)
                to find its pre-image (using Sha-256). To keep your private pre-image secure, all processing must be 
                done on your end so that no one but you can see it. 
            </WhiteText>
            <LargeImage src={loading} alt="svg-loading" />
            <VerticalGap/>
        </BlackFullScreen>
        )
    } else {
        return(
            <CenterComponent>
                <Wrapper>
                    <TextBlock>
                        <ol>
                            <li>
                            Enter the pool that you wish to verify your membership in. 
                            </li>
                            <li>
                            Enter your pre-image.
                            </li>
                            <li>
                            Enter your member number.
                            </li>
                            <li>
                            Generate a random password (performed on your end - so we can't see).
                            </li>
                            <li>
                            Generate a zk-SNARK proof that proves you posess the associated password (pre-image) for that member, without revealing you or the password. This takes a long time ~2-3 minutes.
                            </li>
                            <li>
                            Update your new password on-chain (so we can't pretend to be you).
                            </li>
                        </ol>
                    </TextBlock>
                </Wrapper>
                <LongTextBox>
                Name
            </LongTextBox>

            <LongInput 
                type="text"
                placeholder="pool-name..."
                name="poolName"
                onChange={(e) => setPoolName(e.target.value)}
            ></LongInput>   

            <LongTextBox>
                Pre-Image
            </LongTextBox>

            <LongInput 
                type="text"
                placeholder="[0, 0, 34252345..., 2345239845...]"
                name="preImage"
                onChange={(e) => handlePreImageInput(e.target.value)}
            ></LongInput>   
            
            <LongTextBoxDetail>
                Member Number (An integer from 0 to the Nth final member)
            </LongTextBoxDetail>

            <TinyInput 
                type="number"
                placeholder="1"
                name="memberNumber"
                onChange={(e) => setMemberNumber(e.target.value)}
            ></TinyInput>
 
            {/* <LongTextBoxForOutput>
                Old Pre Image Dec Hash
            </LongTextBoxForOutput>

            <LongTextBoxDetailNoMargin onClick={() => {navigator.clipboard.writeText(preImageDecHash)}}>
                {`["${preImageDecHash[0]},"${preImageDecHash[1]}"]`}
            </LongTextBoxDetailNoMargin>

            <LongTextBoxForOutput>
                Old Pre Image Hex Hash
            </LongTextBoxForOutput>

            <LongTextBoxDetailNoMargin onClick={() => {navigator.clipboard.writeText(preImageHexHash)}}>
                {`["${preImageHexHash[0]},"${preImageHexHash[1]}"]`}
            </LongTextBoxDetailNoMargin> */}
            
            <Title>
            Generate and copy your new pre-image (below)
            </Title>

            <SmallButton onClick={generateNewPasswordDetails}>
                Generate
            </SmallButton>

            <LongTextBoxDetailNoMargin onClick={() => {navigator.clipboard.writeText(newPassword)}}>
                {newPassword}
            </LongTextBoxDetailNoMargin>

            <VerticalGap/>

            <LongerButton onClick={generateProofSetup}>
                Submit Form
            </LongerButton>
        </CenterComponent>
        )
    }
  };
  
  export default VerifyIdentityForm;
