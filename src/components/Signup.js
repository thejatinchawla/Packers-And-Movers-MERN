import axios from 'axios'
import React,{useState} from 'react'
import signup from '../signup.png'
const Signup = () => {
  const [fullname, setfullname] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")

  const postName = async (e) => {
    e.preventDefault()
    try {
    const resp = await axios.post("http://localhost:5000/signup",{fullname,username,password,cpassword})
    console.log(resp)
    window.location='/login'
    alert("Profile Created Successfully")
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className='row mx-3'>
      <div className="col-md-4 border border-1 p-4 ">
        <form >
        <h1>SIGN UP</h1>
          <input required type="text" name='fullname' value={fullname} onChange={(e)=>{setfullname(e.target.value)}} placeholder='Enter Name' className='form-control mt-5 '/>
          <input required type="text" name='username' value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='Enter username eg. jatin123 ,jatin_123 ,etc' className='form-control mt-4 '/>
          <input required type="password" name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Password' className='form-control mt-4 '/>
          <input required type="password" name='cpassword' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  placeholder='Confirm Password' className='form-control mt-4 mb-4 '/>
          <input required className="form-check-input me-2" type="checkbox" />
          <label className='form-check-label'>
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
          <button type='submit' disabled={cpassword.length === 0} onClick={postName} className="btn btn-primary form-control mt-3">Register</button>
        </form>
      </div>
      <div className="col-md-5">
    <img src={signup} className='img-fluid' alt="Sample_image"/>
      </div>
    </div>
  )
}

export default Signup
