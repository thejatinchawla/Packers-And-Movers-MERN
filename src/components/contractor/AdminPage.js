import React from 'react'
import {Link} from 'react-router-dom'

const AdminPage = () => {
  return (
    <div>
        <div id='page' className='row mx-3'>
      <div className="col-md-4 border border-1 p-4 mt-5">
        <h1 className='mb-5'>WELCOME ADMIN</h1>
        <Link to="/order">
            <Link to="/adminorder"><button  type='button' className="btn btn-warning form-control mt-3 mb-3">Transport Order</button></Link>
        </Link>
        <Link to="orderstatus">
        <button  type='button' className="btn btn-warning form-control mt-3 mb-3">Update Order Status</button>
        </Link>
        <Link to="/"><button  type='button' className="btn btn-danger form-control mt-3 mb-3">Log out</button></Link>
      </div>
    </div>
    </div>
  )
}

export default AdminPage
  
