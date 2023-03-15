import React from 'react'
import Form from "./Form"
const Login = () => {
  return (
    <div className='w-10/12 mx-auto max-w-[1600px] pt-5'>
      <h1 className='mb-5 text-6xl font-bold uppercase text-center'>
        Login to your account
      </h1>

      <div className="rounded-lg w-6/12 mx-auto shadow-[0_0_30px_0_rgba(0,0,0,0.3)] py-12">
        <Form/>
      </div>
    </div>
  )
}

export default Login