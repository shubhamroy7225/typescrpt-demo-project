import React, { useState } from 'react';
const users=[
    {name:"shubham",age:20},
    {name:"anil",age:20},
    {name:"mukesh",age:20},
]

const UserSearch:React.FC = () => {
    const [name,setName]=useState('')
    const [user,setUser]=useState<{name:string,age:number}|undefined>()
    const findUser = ()=>{

        let foundUser = users.find((user)=>{
            return user.name === name
        })
       setUser(foundUser)
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={findUser}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
};

export default UserSearch;