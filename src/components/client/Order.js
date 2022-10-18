import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
    <div className='row m-3 text-black' style={{fontFamily:"serif"}}>
      {state.contractors.map((contractor)=>{
        const {_id,companyname,about,year,address,call,email,weight,needs,furniture,rate} = contractor
        return(
          <div class="card m-4" style={{width:"26rem"}}>
  <div key={_id} class="card-body">
    <h4 class="card-title">{companyname.toUpperCase()} <p style={{color:"goldenrod"}} className='d-flex justify-content-end fa fa-star'>{rate}</p> </h4>
    <hr />
    <p class="card-text">{about}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item fa fa-calendar"> : {year}</li>
    <li class="list-group-item fa fa-map-marker"> : {address}</li>
    <li class="list-group-item fa fa-phone phone">  : {call.toUpperCase()}</li>
    <li class="list-group-item fa fa-envelope envelope"> : {email}</li>
  </ul>
  <ul class="list-group list-group-flush">
  <p className='text-center'><strong>Pricing Schemes</strong> </p>
    <p class="card-text"><strong>Weight:</strong> {weight}</p>
    <p class="card-text"><strong>Shifting needs:</strong> {needs}</p>
    <p class="card-text"><strong>Furniture:</strong> {furniture}</p>
   
  </ul>
  <div class="card-body d-flex justify-content-end">
    <Link to="/login/client/order/quote">
   <button className="btn btn-success">procced</button>
    </Link>
  </div>
</div>
        )
      })}
    </div>
  )
}
export default Order

