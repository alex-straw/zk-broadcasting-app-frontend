import React from 'react';
import CreateForm from '../components/CreateForm';
import { Title, CenterComponent} from "../component-styles/layout-styles"


const Create = () => {
  return (
        <div>
        <CenterComponent>          
          <Title> 1. Create </Title>
          <CreateForm/>
        </CenterComponent>
        </div>
  );
};

export default Create;