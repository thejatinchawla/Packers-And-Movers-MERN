import React,{useState} from 'react'
import axios from 'axios'

const AdminOrder = () => {
    const [companyname, setcompanyname] = useState("")
    const [about, setabout] = useState("")
    const [year, setyear] = useState("")
    const [address, setaddress] = useState("")
    const [call, setcall] = useState("")
    const [email, setemail] = useState("")
    const [weight, setweight] = useState("")
    const [needs, setneeds] = useState("")
    const [furniture, setfurniture] = useState("")

    const postAdminDetails = async (e) => {
        e.preventDefault()
        try {
        const resp = await axios.post("http://localhost:5000/admindetails",{companyname,about,year,address,call,email,weight,needs,furniture})
        console.log(resp)
        window.location='/admin/welcome'
        alert("Company Details Entered Successfully")
        } catch (error) {
            alert("error occured")
          console.log(error.response);
        }
      }
    return (
      <div id='page' className='row mx-3'>
        <div className="col-md-4 border border-1 p-4 mt-5 ">
          <form onSubmit={postAdminDetails} >
          <h2>Company Details</h2>
            <input type="text"  value={companyname} onChange={(e)=>{setcompanyname(e.target.value)}} placeholder='Enter Company Name' className='form-control mt-5 mb-2' required/>
            <textarea type="textarea"  value={about} onChange={(e)=>{setabout(e.target.value)}} placeholder='About' className='form-control mb-2' required></textarea>
            <input type="text"  value={year} onChange={(e)=>{setyear(e.target.value)}} placeholder='since year' className='form-control mb-2' required/>
            <input type="text"  value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder='Enter Address' className='form-control mb-2' required/>
            <input type="text"  value={call} onChange={(e)=>{setcall(e.target.value)}} placeholder='Enter Phone Number' className='form-control mb-2' required/>
            <input type="text"  value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter email' className='form-control mb-2' required/>
            <input type="text"  value={weight} onChange={(e)=>{setweight(e.target.value)}} placeholder='Enter Rate according to weight' className='form-control mb-2' required/>
            <input type="text"  value={needs} onChange={(e)=>{setneeds(e.target.value)}} placeholder='Enter Rate according to BHK eg.1BHK=2000RS ' className='form-control mb-2' required/>
            <input type="text"  value={furniture} onChange={(e)=>{setfurniture(e.target.value)}} placeholder='Enter Rate according material. eg:wood=20rs extra, glass=100rs extra' className='form-control mb-2' required/>
            <button type='submit' disabled={furniture.length === 0} className="btn btn-primary form-control mt-3 mb-3">Submit</button>
          </form>
        </div>
      </div>
    )
  }
  export default AdminOrder
  
            
    
