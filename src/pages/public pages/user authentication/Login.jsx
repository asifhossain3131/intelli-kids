import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    // hooks
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    useTitle('Login')

    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target 
        const email=form.email.value 
        const password=form.password.value 
        console.log(email,password)
    }
    return (
        <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mt-12">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
          <form onSubmit={handleLogin}>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div>
            <span className='text-red-500'>{error}</span>
            <span className='text-green-500'>{success}</span>
          </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login"  className="btn btn-primary"/>
              </div>
          </form>
          <p className='text-center'>Don't have any account?
            <Link to='/registration' className='ms-2 underline text-blue-500'>Register</Link>
          </p>
          <div className="divider">OR</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;