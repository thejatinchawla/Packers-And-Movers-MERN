import React from 'react'

const About = () => {
  return (
    <>
    <div className='container'>
        <p className='display-5 text-center mt-3'>YOUR MOVE IS OUR RESPONSIBILITY</p>
        <h4 className='text-center'>Welcome To Safe & Reliable Cargo Packers and Movers</h4>
    </div>
    <div className="row container d-flex justify-content-between">
      <div className=" col-md-7 mx-5 mt-5">
        <h3>OUR PHILOSOPHY</h3>
        <p>The Strix is a main migration specialist organization since 2002. We are guaranteed packers and movers in the business and have set new guidelines in the migration business .Our long stretches of involvement have assisted us with improving and have gotten us to an eminent and unmistakable situation in the migration business. Safe & Reliable Cargo Packers and Movers are supply excellent Services in Loading and Unloading provides educated and professional staffs that are educated in Loading and Unloading of container, palletizing of inbound and outbound freight.</p>
      </div>
      <div className="col-md-4">
        <img className='mt-5' width={500} src="https://www.assureshift.in/sites/default/files/images/blog/difference-between-truck-rental-and-hiring-packers-movers.jpg" alt="truck" />
      </div>
      <div className=" d-flex justify-content-around mt-5">
        <h6>Pre-move survey</h6>
        <h6>Disassembly & Packing</h6>
        <h6>Careful Loading</h6>
        <h6>Safely Deliever</h6>
      </div>
      <div className=" d-flex justify-content-around m-5 p-5 mt-5">
        <p>we firmly believe that understanding your individual needs and planning is the key to smooth moving experience.</p>
        <p>Before loading your household goods onto the carriage vehicle, we will disassemble your heavy furniture (like Bed, Wardrobe, cabinets, chairs) .</p>
        <p>The goods are carefully loaded in the transport vehicle .</p>
        <p>When goods are Deliever then our team carefully unloaded from the truck .</p>
      </div>
    </div>
    </>
  )
}

export default About
