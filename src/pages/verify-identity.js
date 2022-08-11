import React from 'react';
import { Wrapper, Title, CenterComponent, VerticalGap, TextBlock} from "../component-styles/layout-styles"
import VerifyIdentityForm from "../components/VerifyIdentityForm"

const VerifyIdentity = () => {
    return (
        <Wrapper>
            <Title> Verify Identity </Title>
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
                <VerticalGap/>
                <VerifyIdentityForm/>
            </CenterComponent>
        </Wrapper>
      );
};

export default VerifyIdentity;