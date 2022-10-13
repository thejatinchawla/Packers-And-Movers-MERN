import axios from 'axios'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const AdminSignup = () => {
  const [companyName, setcompanyName] = useState("")
  const [phone, setphone] = useState("")
  const [place, setplace] = useState("")
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")

  const postSignup = async (e) => {
    e.preventDefault()
    try {
    const resp = await axios.post("http://localhost:5000/adminsignup",{companyName,phone,place,password,cpassword})
    console.log(resp)
    window.location='/admin'
    alert("Profile Created Successfully")
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div id='page' className='row mx-3'>
    <div className="col-md-4 border border-1 p-4 mt-5 mx-5 ">
        <form onSubmit={postSignup}>
        <h2>CONTRACTOR SIGN UP</h2>
          <input type="text" value={companyName} onChange={(e)=>{setcompanyName(e.target.value)}} placeholder='Enter Company name' className='form-control mt-5 mb-4' required/>
          <input type="text" className='form-control' value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter Phone Number" required/>
          <input type="text" className='form-control mt-4' value={place} onChange={(e)=>{setplace(e.target.value)}} placeholder="Enter Place" required/>
          <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Password' className='form-control mt-4 ' required/>
          <input type="password" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  placeholder='Confirm Password' className='form-control mt-4 mb-4 'required/>
          <input className="form-check-input me-2" type="checkbox" required/>
          <label className='form-check-label'>
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
          <button type='submit' disabled={cpassword.length === 0} className="btn btn-primary form-control mt-3 mb-3">Register</button>
          <p>Already have account? <Link to="/">Login</Link></p>
        </form>
      </div>
      </div>
  )
}

export default AdminSignup