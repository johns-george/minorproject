import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    // const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:4000/api/v1/register')
        .then((res) => {
        })
    }


    const handleSubmit = (event) => {
        debugger
        console.log('entered handler block')
        event.preventDefault();
        axios
        .post('http://localhost:4000/api/v1/register', { email, username, password })
        .then((res) => {
            console.log(JSON.stringify(res,null,2))
            alert('Registration Successful')
            setEmail('')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/login')
        })
        .catch((error) => {
            console.log('Unable to register user')
        })

    }

  return (
    <div className='w-full h-screen flex'>
        <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
            onSubmit={handleSubmit}
            >
                {/* Email Input */}
                <label>Email</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                 {/*Username Input */}
                 <label>Username</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                 {/* Password Input */}
                 <label>Password</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                {/* Button */}
                <button className='w-[200px] h-[50px] border hover:bg-teal-900'
                type='submit'>Sign Up</button>
                <div className=" mt-4 text-gray-400">
            <p>
              Already an account? <Link className=" underline text-blue-300" to="/login">Login</Link>
            </p>
          </div>
            </form>
        </div>
        <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
            <button className='text-3xl text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp