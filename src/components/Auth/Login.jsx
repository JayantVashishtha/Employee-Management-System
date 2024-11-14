import React, { useState } from 'react'

const Login = ({handleLogin}) => {
 
  const [email, setEmail]=useState('')
  const [password, setpassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)

    setEmail('')
    setpassword('')
  }
  return (
    <>
     <div className='flex items-center justify-center h-screen'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-white' type='email' placeholder='Enter your email'/>
                <input
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                 required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-white' type="password" placeholder='Enter the password' />
                <button className='mt-5 text-white outline-none  border-none border-2 bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
    </>

  )
}

export default Login