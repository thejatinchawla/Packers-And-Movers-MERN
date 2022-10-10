import axios from 'axios'
import React,{useState} from 'react'
import signup from '../signup.png'
const Signup = () => {
  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")
  async function postName(e) {
    e.preventDefault()
    try {
    const resp = await axios.post("http://localhost:5000/signup",{fullname,email,password,cpassword})
    console.log(resp)
    window.location='/login'
    alert("Profile Created Successfully")
    } catch (error) {
      console.log(error.response);
    }
  }

 
  return (
    <div className='row  mx-3'>
      <div className="col-md-4 border border-1 p-4 ">
        <form onSubmit={postName}>
        <h1>Sign Up</h1>
          <input type="text" name='fullname' value={fullname} onChange={(e)=>{setfullname(e.target.value)}} placeholder='Your Name' className='form-control mt-5 '/>
          <input type="text" name='email' value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Your Email' className='form-control mt-4 '/>
          <input type="text" name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Your Password' className='form-control mt-4 '/>
          <input type="text" name='cpassword' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  placeholder='Confirm Password' className='form-control mt-4 mb-4 '/>
          <input className="form-check-input me-2" type="checkbox" />
          <label className='form-check-label'>
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
          <button type='submit' className="btn btn-primary form-control mt-3">Register</button>
        </form>
      </div>
      <div className="col-md-4">
    <img src={signup} className='img-fluid' alt="Sample_image"/>
      </div>
    </div>
  )
}

export default Signup
