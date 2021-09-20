import React, { useState } from 'react';
import "./Navbar.css";
import { useHistory } from 'react-router-dom';

function Navbar() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function logout() {
        localStorage.removeItem('loggedin');
        history.push('/');
        window.location.reload(true);
    }


    function login(event) {
        event.preventDefault();

        let users = JSON.parse(localStorage.getItem('fbUsers'));

        let i = 0;
        for (let user of users) {
            if (user.username === username && user.password === password) {
                i++;
            }
        }

        if (i === 1) {
            alert('Login Successful');
            localStorage.setItem('loggedin', 'loggedin')
            history.push('/dashboard');
            window.location.reload(true);
        }
        else {
            alert('Invalid Login');
        }
    }


    return (
        <div>
            <div className="row nav">
                <div className="col-md-6">
                    <h1>Facebook</h1>
                </div>
                <div className="col-md-6">
                    {
                        (() => {
                            if (localStorage.getItem('loggedin')) {
                                return <button onClick={logout}>LOGOUT</button>
                            }
                            else {
                                return <div>
                                    <input type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button onClick={login}>LOGIN</button>
                                </div>
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar;