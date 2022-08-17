import React from 'react';
import { Title, CenterComponent} from "../component-styles/layout-styles"
import ViewData from "../components/ViewData"

const View = () => {

    return (        
      	<div>
            <CenterComponent>          
          		<Title> View </Title>
           		<ViewData/>
            </CenterComponent>
            </div>
    );
};

export default View;