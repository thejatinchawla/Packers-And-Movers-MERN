import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Clientmainpage = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8k3r8o', 'template_1c08yjy', form.current, 'AHxJquwAhMAmsAbyY')
      .then((result) => {
        alert("Thank you!! Your request has been sent successfully!")
        window.location='/client'
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    
  return (
    <div id='page' className='row mx-3'>
    <div className="text-white col-md-4 border border-1 p-4 mt-5 mx-5 ">
        <form ref={form} onSubmit={sendEmail} >
        <h2 className='mb-4'>REQUEST A QUOTE</h2>
        <div className="d-flex justify-content-between"></div>
          <div><strong> Proper Address:</strong><input type="text" placeholder='Enter Your Proper Residental Address' className='form-control mb-3' name='address'/></div>
          <div><strong> Destination:</strong><input type="text" placeholder='From' className='form-control mb-2' name='from'/></div>
          <div><input type="text" className='form-control mb-4' placeholder='To' name='to'/></div>
         <strong>Weight :</strong><input type="number" className='form-control mb-2' placeholder='Enter the approx weight :' name='weight' />

                <div className="fragile">
        <p><strong> Types of Items :</strong></p> 
        <input type="number" className='form-control mb-2' placeholder='Wooden Furniture :' name='wooden' />
        <input type="number" className='form-control mb-2' placeholder='Glass Items :' name='glass'/>
        <input type="text" className='form-control mb-4' placeholder='Others :' name='others' />
                </div>
                <div className="needs me-5">
                    <strong>Shifting Needs :</strong>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1BHK" name='needs' />
                    <label class="form-check-label" for="flexCheckDefault">
                        1BHK
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="2BHK" name='needs'  />
                    <label class="form-check-label" for="flexCheckChecked">
                        2BHK
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="3BHK" name='needs'  />
                    <label class="form-check-label" for="flexCheckChecked">
                        3BHK
                    </label>
                    </div>
                </div>
                <input type="text" className='form-control mb-4' placeholder='Enter Your Name' name='name'/>
                <input type="text" className='form-control mb-4' placeholder='Enter Email' name='email'/>
                <input type="text" className='form-control mb-4' placeholder='Enter Phone Number' name='phone'/>
            <button type='submit' className="btn btn-success form-control">Submit</button>
        </form>
      </div>
      </div>
  )
}

export default Clientmainpage

