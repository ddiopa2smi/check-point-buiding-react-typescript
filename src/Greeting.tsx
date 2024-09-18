import React from 'react';


const Greeting = (props: { name: string }) => {
    return <div>Hello, {props.name}!</div>;
};
export default Greeting;