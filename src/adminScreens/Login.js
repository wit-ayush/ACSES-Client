import React from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo-removed.png'
import { server_url } from '../constants'

const Login = () => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            username,
            password
        }
        await axios.post(`${server_url}/api/login`,data).then((res) => {
            if(res.data.message === 'success'){
                alert('Login Successful')
            }
            else{
                alert('Invalid Credentials')
            }
        })
        
    }

    

  return (
    <>
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-[100px] h-[60px] mr-2" src={logo} alt="logo"/>
    </a> */}
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-100 dark:border-gray-700">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#355b60]">
                  Admin Login
    </h1>
    <form class="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                    
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-[#123438] dark:text-[#355b60]">Username</label>
                      <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      
                      required/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-[#109DAF] dark:text-[#355b60]">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      required/>
                  </div>
                  <button type="submit" class="w-full text-white bg-[#355b60] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-[white] dark:hover:bg-[#23474b] dark:focus:ring-primary-800">Sign in</button>
              </form>

    </div>
    </div>

    </div>
    </>
  )
}

export default Login