import React from 'react';
import VerifyIdentityForm from "../components/VerifyIdentityForm"
import {Title, CenterComponent} from "../component-styles/layout-styles"

const VerifyIdentity = () => {
    return (
        <div>
          <CenterComponent>          
            <Title> Verify Identity </Title>
          </CenterComponent>
          <VerifyIdentityForm/>
        </div>
      );
};

export default VerifyIdentity;