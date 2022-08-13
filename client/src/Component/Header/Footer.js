import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <section className="footer">
    <div className="container-fluid row d-flex justify-content-around box-container">
      <div className="box col-md-3">
        <h3>branches</h3>
     
        <a href="#"> <i className="fas fa-map-marker-alt" /> delhi </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> mumbai </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> goregaon </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> kolkata </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> jharkhand </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> patna</a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> bhagalpur </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> gaya </a>
      </div>
      <div className="box col-md-3">
        <h3>quick links</h3>
        <a href="#"> <i className="fas fa-arrow-right" /> Home </a>
        <a href="#"> <i className="fas fa-arrow-right" /> Upcoming Events </a>
        <a href="#"> <i className="fas fa-arrow-right" /> About </a>
        <a href="#"> <i className="fas fa-arrow-right" /> Gallery </a>
        <a href="#"> <i className="fas fa-arrow-right" /> reivew </a>
        <a href="#"> <i className="fas fa-arrow-right" /> contact </a>
      </div>
      <div className="box col-md-3">
        <h3>contact info</h3>
        <a href="#"> <i className="fas fa-phone" /> +916207179472 </a>
        <a href="#"> <i className="fas fa-phone" /> +919973514345 </a>
        <a href="#"> <i className="fas fa-envelope" /> keshav913ptn@gmail.com </a>
        <a href="#"> <i className="fas fa-envelope" /> amitypatna@gmail.com </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> Patna, india - 801503 </a>
      </div>
      <div className="box col-md-3">
        <h3>follow us</h3>
        <a href="#"> <i className="fab fa-facebook-f" /> facebook </a>
        <a href="#"> <i className="fab fa-twitter" /> twitter </a>
        <a href="#"> <i className="fab fa-instagram" /> instagram </a>
        <a href="#"> <i className="fab fa-linkedin" /> linkedin </a>
      </div>
    </div>
    <div className="credit"> created by <span>OUR</span> | all rights reserved </div>
  </section>
  )
}
