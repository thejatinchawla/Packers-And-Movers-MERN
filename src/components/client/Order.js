import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Order = () => {
  const [state, setstate] = useState({contractors:[]})

  const getContractors = () =>{
    axios.get("http://localhost:5000/admindetails")
    .then((res)=>{
        console.log(res)
        setstate({contractors:res.data})
    })
}
useEffect(() => {
 getContractors()
}, [])
  return (
    <div className='row m-3 text-black'>
      {state.contractors.map((contractor)=>{
        const {_id,companyname,about,year,address,call,email} = contractor
        return(
          <div class="card mx-3" style={{width:"18rem"}}>
  <div key={_id} class="card-body">
    <h5 class="card-title">{companyname.toUpperCase()}</h5>
    <p class="card-text">{about.toUpperCase()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{year.toUpperCase()}</li>
    <li class="list-group-item">{address.toUpperCase()}</li>
    <li class="list-group-item">{call.toUpperCase()}</li>
    <li class="list-group-item">{email.toUpperCase()}</li>
  </ul>
  <div class="card-body justify-content-end">
   <button className="btn btn-success">procced</button>
  </div>
</div>
        )
      })}
    </div>
  )
}

export default Order