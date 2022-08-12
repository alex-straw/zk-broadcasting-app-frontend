import React from 'react';
import CreateForm from '../components/CreateForm';
import { Wrapper, Title, CenterComponent} from "../component-styles/layout-styles"


const Create = () => {
  return (
        <Wrapper>
            <Title> Create </Title>
            <CenterComponent>
                <CreateForm/>
            </CenterComponent>
        </Wrapper>
  );
};

export default Create;