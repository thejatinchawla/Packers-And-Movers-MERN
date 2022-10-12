import axios from 'axios'
import React,{useState} from 'react'
// import signup from '../signup.png'
const Signup = () => {
  const [fullname, setfullname] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")

  const postSignup = async (e) => {
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
      <div className="col-md-4 border border-1 p-4 mt-5 ">
        <form onSubmit={postSignup}>
        <h1>SIGN UP</h1>
          <input type="text" name='fullname' value={fullname} onChange={(e)=>{setfullname(e.target.value)}} placeholder='Enter Name' className='form-control mt-5 mb-4' required/>
          <div className='input-group'>
          <div className='input-group-text'>@</div>
          <input type="text" className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="Enter username eg. jatin123 ,jatin_123 ,etc" required/>
          </div>
          <input type="password" name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Password' className='form-control mt-4 ' required/>
          <input type="password" name='cpassword' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  placeholder='Confirm Password' className='form-control mt-4 mb-4 'required/>
          <input className="form-check-input me-2" type="checkbox" required/>
          <label className='form-check-label'>
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
          <button type='submit' disabled={cpassword.length === 0} className="btn btn-primary form-control mt-3">Register</button>
        </form>
      </div>
      {/* <div className="col-md-5">
    <img src={signup} className='img-fluid' alt="Sample_image"/>
      </div> */}
    </div>
  )
}

export default Signup
