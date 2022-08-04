import React from 'react';
import CreateForm from '../components/CreateForm';

const Create = () => {
  return (
    <div
      style={{
        display: 'flex-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh'
      }}
      >
      <h1>Create</h1>
      <CreateForm/>
    </div>
  );
};

export default Create;