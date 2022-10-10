import React from 'react'

function MainPage() {
  return (
    <div className='row container'>
        <div className='col-md-6'>
            <h1 className='mb-5'>______</h1>
            <h1 className='display-3'>Landing page Abstract Background </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsa voluptas sed aliquid, reprehenderit error perferendis odit obcaecati quae dolores corporis saepe accusantium tempora officiis ea deleniti molestiae iusto aut?</p>
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-primary mx-5">Signup</button>
        </div>
        <div className="col-md-5 mt-5">
            <img src='https://raw.githubusercontent.com/nrajanithin/mern-client/master/src/team.png' alt='group'></img>
        </div>
    </div>
  )
}
export default MainPage

