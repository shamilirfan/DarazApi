import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {
        const user = {
            username: username,
            email: email,
            password: password
        };

        fetch('http://localhost:3001/signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => window.alert("Your information is saved"));
    };

    return (
        <div className="flex w-screen h-screen bg-gray-900">
            <div className="w-4/12 h-full"></div>
            <div className="w-4/12 h-full mt-[6%]">
                <div className='bg-gray-800 flex flex-col justify-center px-[10%] py-[20%]'>
                    <form className='flex flex-col w-full text-white'>
                        <h2 className='text-4xl text-teal-500 font-bold text-center py-7'>SIGNUP</h2>
                        <input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <button
                            type="button"
                            onClick={signup}
                            className='m-3 px-4 py-3 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >SIGNUP
                        </button>
                    </form>
                    <p className="mt-2 text-teal-300">Already Registered?</p><Link to="/signin"><p className="text-teal-300 underline">Signin</p></Link>
                </div>
            </div>
            <div className="w-4/12 h-full">
            </div>
        </div>
    );
}
export default Signup;


