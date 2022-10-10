import React from 'react'
import login from '../login.png'

const Login = () => {
  return (
    <div className='row container'>
      <div className="col-md-4 border border-1 p-4">
        <form>
        <h1>Sign In</h1>
          <input type="text" placeholder='Your Email' className='form-control mt-5 '/>
          <input type="text" placeholder='Your Password' className='form-control mt-4 mb-4'/>
          <input className="form-check-input me-2" type="checkbox" />
          <label className='form-check-label me-5'>
           Remember me  <a className='fpass mx-4' href="#!">forgot Password?</a>
          </label>
          <button type='submit' className="btn btn-primary form-control mt-3">Register</button>
        </form>
      </div>
      <div className="col-md-4">
    <img src={login} width={550} alt="Sample_image"/>
      </div>
    </div>
  )
}

export default Login