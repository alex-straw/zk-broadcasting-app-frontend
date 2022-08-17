import { Contract } from "ethers";
import poolFactoryAbi from '../../contracts/poolFactoryABI'
import poolAbi from '../../contracts/poolABI.json'
import React, {useState, useContext} from "react";
import { Button, MidTextBox, HyperLink, LongInput, LongTextBox, LongTextBoxDetail, TinyInput, MidTextBoxDetail, LongerButton, SmallButton} from "../../component-styles/generic-styles"
import { CenterComponent, Title, LargeImage, BlackFullScreen, VerticalGap, WhiteTitle, Wrapper, TextBlock, WhiteText} from "../../component-styles/layout-styles";
import { UserContext } from "../../helpers/UserContext";
import { upload } from "@testing-library/user-event/dist/upload";
import { Hyperlink } from "../../component-styles/navbar-styles";
import { Route } from "react-router-dom";

const ViewData = () => {

	/* GENERATE PROOF AND SEND TX */

	const [poolName, setPoolName] = useState("pool-name...");
	const userContext = useContext(UserContext);
	const [processing, setProcessing] = useState(false)
	const [poolAddress, setPoolAddress] = useState("0x0000000000000000000000000000000000000000")
	const [cidIndex, setCidIndex] = useState(0);
	const [cidHash, setCidHash] = useState("0x0000000000000000000000000000000000000000");
	const [uploadCount, setUploadCount] = useState(0);

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

	async function getPoolData() {
				
		if (!MetaMaskConnected()) {
			alert("Please connect your Metamask. ")
			setProcessing(false);               
		} else {
			const poolAddress = await getPoolAddress()

			if (poolAddress == "0x0000000000000000000000000000000000000000") {
				alert("Invalid pool name") 
				setProcessing(false);                
			} else {

				const poolContract = new Contract( 
					poolAddress,
					poolAbi,
					userContext.signer
				)

				let verifiedCount = await poolContract.verifiedIdCount()
				let broadcastThreshold = await poolContract.broadcastThreshold()

				setUploadCount(parseInt(await poolContract.uploadCount()))

				if (await verifiedCount < await broadcastThreshold) {
					alert(`${(await broadcastThreshold) - (await verifiedCount)} more member(s) must verify their identity in this pool before broadcasting is enabled`)
					setProcessing(false);                
				} else {
					setPoolAddress(poolAddress)
					setProcessing(true);                
				}
			} 
		}
	}

	async function getBroadcastData() {
		const poolContract = new Contract( 
			poolAddress,
			poolAbi,
			userContext.signer
		)

		if(cidIndex >= uploadCount) {
			alert("Invalid Index")
		} else {
			setCidHash(JSON.stringify(await poolContract.ipfsCIDs(cidIndex)))
		}
	}
	

	function renderPoolData() {

		if(processing){
			return(
				<div>
					<Button onClick={getBroadcastData}>
						Get Broadcast Data
					</Button>
					<MidTextBox>
						CID Index (For this pool: {`0 to ${uploadCount-1}`})
					</MidTextBox>
					<TinyInput 
						type="number"
						placeholder="0"
						name="cidIndex"
						onChange={(e) => setCidIndex(e.target.value)}
					></TinyInput>
					{renderPoolURL()}
				</div>
			)
		} else {
			return(
				<></>
			)
		}
	}


	function renderPoolURL() {
		if(cidHash == "0x0000000000000000000000000000000000000000") {
			return( <div> </div> )
		} else {

			let url = `https://dweb.link/ipfs/${cidHash.replaceAll('"','')}`

			return (
				<HyperLink>			
				<div onClick={() => window.open(url, '_blank')}>
					{url}
				</div>
				</HyperLink>	
			)
		}
	}

	return (
		<CenterComponent>
			<Wrapper>
				<LongTextBox>
					Pool Name
				</LongTextBox>

				<LongInput 
					type="text"
					placeholder="pool-name..."
					name="poolName"
					onChange={(e) => setPoolName(e.target.value)}
				></LongInput>   

				<VerticalGap/>

				<LongerButton onClick = {getPoolData}> Submit </LongerButton>
				<VerticalGap/>
				{renderPoolData()}
			</Wrapper>
		</CenterComponent>
	);
};

export default ViewData;