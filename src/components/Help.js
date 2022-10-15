import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Help() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7oceuy2",
        "template_fdghcap",
        form.current,
        "AHxJquwAhMAmsAbyY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <main className="container">
        <div className="left">
          
          <h1>Contact Us</h1>
          <p>
            Lets talk about this website. Send me a message in the Feedback form
            if you love <br /> this website or find any error/bug and I will be
            in touch within one business day.
          </p>
          <p>
            Thankyou for visiting...much love from <b>The Strix Team</b>&nbsp;♥{" "}
          </p>
        </div>

        <div className="right border border-1">
          <form ref={form} onSubmit={sendEmail}>
            <center>
              <h3 className="contactHeading" id="contactHeading">
                Feedback
              </h3>
            </center>
            <div className="mb-3 ">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name :
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Comment :
              </label>
              <textarea
                className="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                placeholder="Type something"
                rows="2"
              ></textarea>
              <button type="button" onClick={sendEmail} className="btn btn-primary form-control mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Send Feedback
          </button>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Feedback sent succesfully!!</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Thankyou!!.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Okay</button>
                </div>
              </div>
            </div>
          </div>
              {/* {props.showAlert("Feedback Sent","Success")} */}
            </div>
          </form>
        </div>

      </main>
    </>
  );
}
