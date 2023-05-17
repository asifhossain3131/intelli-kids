import React, { useContext, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => {
    // hooks
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const{createUser, profileUpdate,googleLogin,gitLogin}=useContext(AuthContext)
    useTitle('Registration')

    // authenticate functionalities
    const signInWithGoogle=()=>{
        googleLogin()
        .then(result=>{
            setSuccess('Login with Google has been successful')
        })
        .catch(err=>{
            setError(err.message)
        })
    }

    const signInWithGithub=()=>{
        gitLogin()
        .then(result=>{
            setSuccess('Login with GitHub has been successful')
        })
        .catch(err=>{
            setError(err.message)
        })
    }

    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value 
        const photo=form.photo.value 
        const email=form.email.value 
        const password=form.password.value 
       
        setError('')
        setSuccess('')

        createUser(email,password)
        .then(result=>{
            profileUpdate(name,photo)
            setSuccess('Registration has been successful')
            form.reset()
        })
        .catch(err=>{
            setError(err.message)
        })

    }
    return (
        <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mt-12">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-12">
            <div className="card-body ">
          <form onSubmit={handleRegister}>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required/>
              </div>
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
              </div>
              <div>
            <span className='text-red-500'>{error}</span>
            <span className='text-green-500'>{success}</span>
          </div>
              <div className="form-control mt-6">
                <input type="submit" value="Register"  className="btn btn-primary"/>
              </div>
          </form>
          <p className='text-center'>Already have an account?
            <Link to='/login' className='ms-2 underline text-blue-500'>Login</Link>
          </p>
          <div className="divider">OR</div>
          <div className='mx-auto flex flex-col gap-4 justify-center items-center'>
            <span>Sign up using</span>
          <div className='flex gap-2'> 
          <button onClick={signInWithGoogle} className="btn btn-circle btn-error">
            <FaGoogle></FaGoogle></button>
          <button onClick={signInWithGithub} className="btn btn-circle">
            <FaGithub></FaGithub></button>
          <button className="btn btn-circle btn-primary">
            <FaFacebookF></FaFacebookF></button>
          </div>
          
          </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;