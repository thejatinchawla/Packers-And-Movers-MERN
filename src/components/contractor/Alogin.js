import axios from 'axios'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Alogin = () => {
    const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")

  const postLogin = async (e) => {
    e.preventDefault()
    try {
    const resp = await axios.post("http://localhost:5000/admin",{phone,password})
    console.log(resp)
    window.location='/admin/welcome'
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
        <h1 className='mb-5'>ADMIN LOGIN</h1>
        <input type="text" className='form-control' value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter Phone Number" required/>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} className='form-control mt-3 mb-3' required/>
        <input className="form-check-input me-2" type="checkbox"/>
        <label className='form-check-label me-5'>Remember me</label>
        <button disabled={password.length === 0} type='submit' className="btn btn-primary form-control mt-3 mb-3">Log in</button>
        <p>Dont have account? <Link to="/bothsignup">create an account</Link></p>
        </form>
      </div>
      {/* <div className="col-md-5">
    <img src={login} className='img-fluid' alt="Sample_image"/>
      </div> */}
    </div>
  )
}

export default Alogin