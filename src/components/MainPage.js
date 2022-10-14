import React from 'react'
import {Link} from 'react-router-dom'
function MainPage() {
  return (
    <div id='page' className='row container'>
      <img src="" alt="" />
        <div className='col-md-6 container'>
            <h1 className='mb-5'>______</h1>
            <h1 className='display-5'>PACKING AND UNNPACKING FOR YOU</h1>
            <p>Packing smart is essential for any move — it can eliminate stress when you’re fully prepared and packed before move day arrives. Our professional teams can provide customized packing services to you, whether you need a little packed or an entire home, we can help.</p>
        </div>
        <div className="container col-md-4 border border-1 p-4 mt-5 mx-5">
        <form >
        <h1 className='mb-5'>LOGIN FORM</h1>
        <Link to="/login"><button className="form-control btn btn-warning mb-5">Client Login</button></Link>
        <Link to="/admin"><button className="form-control btn btn-warning mb-3 ">Admin Login</button></Link>
        <p>Dont have account? <Link to="/bothsignup">create an account</Link></p>
        </form>
      </div>

          </div>
  )
}
export default MainPage
         
  
          


            
