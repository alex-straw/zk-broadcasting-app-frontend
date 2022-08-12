import { Contract } from "ethers";
import React, {useState, useContext} from "react";
import { Button, Input, TextBox, EmailCard, LongInput, LongTextBox, LongTextBoxDetail, TinyInput, MidTextBoxDetail, LongerButton} from "../../component-styles/generic-styles"
import { CenterComponent, Title, VerticalGap, Wrapper } from "../../component-styles/layout-styles";
import { UserContext } from "../../helpers/UserContext";
import { customAlphabet } from "nanoid";
import { ethers } from "ethers";
import { initialize } from 'zokrates-js';
import provingKeyBuffer from './ProvingKeyBuffer.json'

const VerifyIdentityForm = () => {


    /* GENERATE NEW PASSWORD */
    const nanoid = customAlphabet('123456789abcdef', 64)

    const [poolName, setPoolName] = useState("pool-name...");
    const [preImage, setPreImage] = useState("[0, 0, 34252345..., 2345239845...]");
    const [memberNumber, setMemberNumber] = useState("1");
    const [newPassword, setNewPassord] = useState("0");
    const [newPasswordHash, setNewPasswordHash] = useState("0")

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
        setNewPasswordHash(JSON.stringify(newPassword.hexHash))
    }
    
    /* GENERATE PROOF AND SEND TX */

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
        alert("before fetch")
        
        const proof = zokratesProvider.generateProof(artifacts.program, witness, provingKeyBuffer.data);

        alert(JSON.stringify(proof))
    }

    return (
        <div>
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
                onChange={(e) => setPreImage(e.target.value)}
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
            <LongerButton onClick={generateNewPasswordDetails}>
                Generate New Password
            </LongerButton>

            <MidTextBoxDetail onClick={() => {navigator.clipboard.writeText(newPassword)}}>
                {newPassword}
            </MidTextBoxDetail>
            <VerticalGap/>

            <LongerButton onClick={generateZokratesProof}>
                Generate Proof and Verify Your Identity
            </LongerButton>
        </div>
    );
  };
  
  export default VerifyIdentityForm;