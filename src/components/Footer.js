import React from 'react'
function Footer() {
  return (
    <div>
        <footer>
            <p className="copy">
            &copy; 2022 All Rights Reserved by <strong id='ownName'>The Strix</strong>
            </p>
            <div className="social-links mt-4">
            <a href="#!" target={"_blank"} rel="noreferrer" className="fa fa-instagram instagram" >&nbsp;</a>
            <a href="#!" target={"_blank"} rel="noreferrer" className="fa fa-linkedin linkedin">&nbsp; </a>
            <a href="#!" target={"_blank"} rel="noreferrer" className="fa fa-github github">&nbsp;</a>
            <a href="#!" target={"_blank"} rel="noreferrer" className="fa fa-twitter twitter" >&nbsp;</a>
            </div>
      </footer>
    </div>
  )
}

export default Footer