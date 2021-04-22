import React from 'react';
interface ChildProps{
    color:string;
    onClick:()=>void;
}
const Child = ({color,onClick}:ChildProps) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={onClick}>Click me</button>

        </div>
    );
};


const ChildAsFc: React.FC<ChildProps>=({color,onClick}) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
};
export default ChildAsFc;