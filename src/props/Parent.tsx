import React from 'react';
import ChildAsFc from './Child';
import Child from './Child';


const Parent = () => {
    return (
        <div>
            <ChildAsFc color="red" onClick= {()=>console.log('clicked')}/>
        </div>
    );
};

export default Parent;