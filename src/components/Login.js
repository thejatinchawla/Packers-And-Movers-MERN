import axios from 'axios'
import React,{useState} from 'react'
import login from '../login.png'

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const postLogin = async (e) => {
    e.preventDefault()
    try {
    const resp = await axios.post("http://localhost:5000/login",{username,password})
    console.log(resp)
    window.location='/'
    alert("Login Successfully")
  } catch (error) {
      alert("Login Failed")
      console.log(error);
    }
  }
  return (
    <div className='row mx-3'>
      <div className="col-md-4 border border-1 p-4">
        <form>
        <h1>SIGN IN</h1>
          <input required type="text" placeholder='Enter username' value={username} onChange={(e)=>{setusername(e.target.value)}} className='form-control mt-5 '/>
          <input required type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} className='form-control mt-4 mb-4'/>
          <input className="form-check-input me-2" type="checkbox" />
          <label className='form-check-label me-5'>Remember me</label>
          <button disabled={password.length === 0} type='submit' onClick={postLogin} className="btn btn-primary form-control mt-3">Log in</button>
        </form>
      </div>
      <div className="col-md-5">
    <img src={login} className='img-fluid' alt="Sample_image"/>
      </div>
    </div>
  )
}

export default Login