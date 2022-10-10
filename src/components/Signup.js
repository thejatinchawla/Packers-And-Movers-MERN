import React from 'react'
import signup from '../signup.png'
const Signup = () => {
  return (
    <div className='row container'>
      <div className="col-md-4 border border-1 p-4">
        <form>
        <h1>Sign Up</h1>
          <input type="text" placeholder='Your Name' className='form-control mt-5 '/>
          <input type="text" placeholder='Your Email' className='form-control mt-4 '/>
          <input type="text" placeholder='Your Password' className='form-control mt-4 '/>
          <input type="text" placeholder='Confirm Password' className='form-control mt-4 mb-4 '/>
          <input className="form-check-input me-2" type="checkbox" />
          <label className='form-check-label'>
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
          <button type='submit' className="btn btn-primary mt-3">Register</button>
        </form>
      </div>
      <div className="col-md-4">
    <img src={signup} width={550} alt="Sample_image"/>
      </div>
    </div>
  )
}

export default Signup
