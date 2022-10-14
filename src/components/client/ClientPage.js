import React from 'react'
import {Link} from 'react-router-dom'

const ClientPage = () => {
  return (
    <div>
        <div id='page' className='row mx-3'>
      <div className="col-md-4 border border-1 p-4 mt-5">
        <h1 className='mb-5'>WELCOME USER</h1>
        <Link to="/order">
        <button  type='button' className="btn btn-warning form-control mt-3 mb-3">Place Order</button>
        </Link>
        <Link to="orderstatus">
        <button  type='button' className="btn btn-warning form-control mt-3 mb-3">Order Status</button>
        </Link>
        <Link to="/"><button  type='button' className="btn btn-danger form-control mt-3 mb-3">Log out</button></Link>
        <div className="quote d-flex justify-content-around">
            <p>Your Move</p><p>*****</p><p>Our Responsibility</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ClientPage
  
