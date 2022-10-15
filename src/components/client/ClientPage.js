import React from 'react'
import {Link} from 'react-router-dom'
const ClientPage = () => {
  const order = () =>{
    alert("Your order has been successfully placed.!!")
  }

  return (
    <div>
        <div id='page' className='row mx-3'>
      <div className="col-md-4 border border-1 p-4 mt-5">
        <h1 className='mb-5'>WELCOME USER</h1>
        <Link to="/order">
        <button  type='button' className="btn btn-warning form-control mt-3 mb-3">Place Order</button>
        </Link>
        
        <button type="button" className="btn btn-warning form-control mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Payment
          </button>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Scan & Pay using this QR Code !!</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <img src="https://github.com/thejatinchawla/Nodejs-backend_Auth/blob/master/public/css/QR_code.jpg?raw=true" className='img-fluid' alt="QRcode" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>       
          <button type="button" class="btn btn-warning form-control" onClick={order}>Order Status</button>
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
  
