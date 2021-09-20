import React from 'react'
import { useState} from 'react';
import fbimage from "../img/facebook.png"

function Body() {

    const[name,setName] = useState('');
    const[userName,setUsername] = useState('');
    const[passwords,setPassword] = useState('');

    function register(event) {
        event.preventDefault();

        let users = JSON.parse(localStorage.getItem('fbUsers') || '[]');
        let newUser = {
            name:name,
            username:userName,
            password:passwords
        }
        
        if(newUser.name === users.name && newUser.username === users.username && newUser.password ===users.password){
            return
        }else{
            users.push(newUser);
            localStorage.setItem('fbUsers',JSON.stringify(users));
        
            alert('registration is successful');
        }
        

    }

    

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                   <img src={fbimage} alt="facebookimage"/>
                </div>
                <div className="col-md-4">
                    <form className="form" onSubmit={register}>
                        <h2>Register</h2>
                        <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                        <input type="text" placeholder="Username" className="form-control" value={userName} onChange={(e)=>setUsername(e.target.value)}/>
                        <input type="password" placeholder="Password" className="form-control" value={passwords} onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Body;