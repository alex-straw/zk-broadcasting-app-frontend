import React from 'react';

import { Title, CenterComponent, TextWrapper } from "../component-styles/layout-styles"

const Home = () => {
	return (
		<div>
			<CenterComponent>
				<Title> Overview </Title>
				<TextWrapper>
					This app is a privacy platform built for the semi-anonymous broadcasting of information using
					blockchain technology. This finds a compromise between anonymity and source legitimacy which 
					is essential for journalism and trade unions. Users of this platform are free to create their 
					own "pools", each comprising a group of trusted individuals with verified identities. Using 
					Zero-Knowledge Succinct Non-Interactive Argument of Knowledge (zk-SNARKs), individuals can verify
					that they are a member of a specific pool without exposing their identity, and subsequently post 
					information to that pool.  
				</TextWrapper>
				<Title> Example Use Cases </Title>
				<TextWrapper>
				<ol>
					<li>
					A pool of university staff at many UK universities can organise large-scale strikes without exposing the leader of the union. 
					</li>
					<pre>
						{"\n"}
					</pre>
					<li>
					A pool of X bank employees who can whistle-blow unethical business practices within their organisation or industry.  
					</li>
					<pre>
						{"\n"}
					</pre>
					<li>
					A pool of 1000 trustworthy journalists who can release information that may otherwise pose a threat to their safety. 
					</li>
				</ol>
				</TextWrapper>
			</CenterComponent>
		</div>
	);
};

export default Home;