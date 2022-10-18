import axios from 'axios'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Clogin = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const postLogin = async (e) => {
    e.preventDefault()
    try {
    const resp = await axios.post("http://localhost:5000/login",{username,password})
    console.log(resp)
    window.location='/login/client'
    alert("Login Successfully")
  } catch (error) {
      alert("Login Failed")
      console.log(error);
    }
  }
  return (
    <div id='page' className='row mx-3'>
      <div className="col-md-4 border border-1 p-4 mt-5">
        <form onSubmit={postLogin}>
        <h1 className='mb-5'>CLIENT LOGIN</h1>
          <div className='input-group'>
          <div className='input-group-text'>@</div>
          <input type="text" className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="Enter username" required/>
          </div>
          <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} className='form-control mt-3 mb-3' required/>
          <input className="form-check-input me-2" type="checkbox"/>
          <label className='form-check-label me-5'>Remember me</label>
          <button disabled={password.length === 0} type='submit' className="btn btn-primary form-control mt-3 mb-4">Log in</button>
          <p>Dont have account? <Link to="/bothsignup">create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Clogin