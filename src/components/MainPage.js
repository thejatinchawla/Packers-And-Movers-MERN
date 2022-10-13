import React from 'react'
import {Link} from 'react-router-dom'
function MainPage() {
  return (
    <div id='page' className='row container'>
      <img src="" alt="" />
        <div className='col-md-6 container'>
            <h1 className='mb-5'>______</h1>
            <h1 className='display-3'>Landing page Abstract Background </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsa voluptas sed aliquid, reprehenderit error perferendis odit obcaecati quae dolores corporis saepe accusantium tempora officiis ea deleniti molestiae iusto aut?</p>
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
         
  
          


            
