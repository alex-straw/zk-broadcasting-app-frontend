import React from 'react';
import { Wrapper, Title, CenterComponent, VerticalGap} from "../component-styles/layout-styles"
import VerifyIdentityForm from "../components/VerifyIdentityForm"

const VerifyIdentity = () => {
    return (
        <Wrapper>
            <Title> Verify Identity </Title>
            <CenterComponent>
                <Wrapper>
                    <pre>
                    1.  Enter the pool that you wish to verify your membership in. {"\n"}
                    2. Enter your pre-image.{"\n"}
                    3. Enter your member number.{"\n"}
                    4. Generate a random password (performed on your end - so we can't see).{"\n"}
                    4. Generate a zk-SNARK proof that proves you posess the associated password (pre-image) for that member,
                    {"\n"}     without revealing you or the password.{"\n"}
                    5. Update your new password on-chain so cannot pretend to be you. {"\n"}
                    </pre>
                </Wrapper>
                <VerticalGap/>
                <VerifyIdentityForm/>
            </CenterComponent>
        </Wrapper>
      );
};

export default VerifyIdentity;