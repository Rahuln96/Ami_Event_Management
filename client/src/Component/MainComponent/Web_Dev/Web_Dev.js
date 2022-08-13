// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
import './Web_Dev.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <div>
      <div className='web'>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="container Fcontainer">
          <div className="row">
            <div className="col-12 mx-auto btnhr">
              <h6 className="text-white animate__animated animate__flip ">
                WELCOME To Our Event
              </h6>
              <h1 className="text-white display-1 my-4 fw-bold animate__animated animate__rotateIn ">
                Web Development
                <br />
                Contest
              </h1>
              <Link to="/Register" className="btn btn-brand fs-3 ">
                REGISTER NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="aboutw" className="bg-light text-center">
        <div className="container Fcontainer">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2>Overview</h2>
              <div className="divider" />
              <p>
                Amity University Patna, is pleased to invite students to take
                participation in Web Development Contest "We don't just build
                websites, we build websites that Sells"
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-sm-6">
                <div className="feature-1box">
                  <div className="icon-box">
                    <img src="/img/web/start.png" alt="" />
                  </div>
                  <h5>Requirement Gathering</h5>
                  <p>First of all we gather information related to our project. <br /><br /></p>
                  <br />
                  <br />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="feature-1box">
                  <div className="icon-box">
                    <img src="/img/web/task.png" alt="" />
                  </div>
                  <h5>Team Planning</h5>
                  <p>
                    In this Event all particpants are divided into group, so
                    planning related to your project is require
                  </p>
                  <br />
                  <br />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="feature-1box">
                  <div className="icon-box">
                    <img src="/img/web/programming.png" alt="" />
                  </div>
                  <h5>Coding</h5>
                  <br />
                  <p>
                    The group whcih will complete there project first will win the
                    contest.<br />
                  </p>
                  <br />
                </div>
              </div>
              <div className="row ">
                <div className="col-12 intro text-center p-5">
                  <h2>Concept of Web Development</h2>
                  <div className="divider" />
                  <p>
                    Web Development is the building and maintenance of websites;
                    it’s the work that happens behind the scenes to make a website
                    look great, work fast and perform well with a seamless user
                    experience
                  </p>
                </div>
              </div>
              <div className="container Fcontainer d-flex align-items-center justify-content-center position-relative flex-wrap">
                <div className="card d-flex position-relative flex-column">
                  <div className="imgContainer">
                    <img src="/img/web/card 1.jpg" />
                  </div>
                  <div className="content">
                    <h2>Planning of Project</h2>
                    <p>
                      Planning the website involves creating a wireframe and
                      sitemap. This is an important step because it is kind of like
                      the skeleton of your site.
                    </p>
                  </div>
                </div>
                <div className="card d-flex position-relative flex-column">
                  <div className="imgContainer">
                    <img src="/img/web/card3.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h2>Testing of Project</h2>
                    <p>
                      Tebsite for potential bugs before its made live and is
                      accessible to general public. Web Testing checks for
                      functionality, usability, security, compatibility, performance
                      of the web application or website.
                    </p>
                  </div>
                </div>
                <div className="card d-flex position-relative flex-column">
                  <div className="imgContainer">
                    <img src="/img/web/cards4-transformed.jpeg" alt="" />
                  </div>
                  <div className="content">
                    <h2>Launching of Project</h2>
                    <p>
                      The project launch marks the beginning of a project. In the
                      narrower sense the project lunch includes all activities and
                      measures of the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* selection | FEATURES */}
      <section id="selection">
        <div className="container Fcontainer">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2>Procedure Of selection</h2>
              <div className="divider" />
              <p>In this Mega Contest there will be total 2 rounds.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-6 col-sm-12">
              <div className="selection">
                <div className="icon-box">
                  <img src="/img/web/round.png" alt="" />
                </div>
                <div>
                  <h6>Round 1</h6>
                  <p>
                    First Round Contain MCQ type queestions which you will have to
                    complete in half an hour.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="selection">
                <div className="icon-box">
                  <img src="/img/web/round2.png" alt="" />
                </div>
                <div>
                  <h6>Round 2</h6>
                  <p>
                    In Second Round you have to do practical of web development in
                    which you have to write a code in 20 minutes. Participants who
                    completed their coding in given time interval will qualifying
                    for final round.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="selection">
                <div className="icon-box">
                  <img src="/img/web/finish.png" alt="" />
                </div>
                <div>
                  <h6>Finale</h6>
                  <p>
                    In Final Round you have to perform a action what judge choices
                    within two minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Schedule  */}
      <section className="bg-light" id="Schedule">
        <div className="container Fcontainer">
          <div className="row">
            <div className="intro text-center">
              <h2>Schedule of the event</h2>
            </div>
            <div className="divider" />
            <p>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even
            </p>
            <div className="col-lg-4 col-md-4 col-sm-12 board54 p-5">
              <p>Round 1 starts at 10am on 7th of August.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 board54 p-5">
              <p>Round 2 starts at 2pm on same date.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 board54 p-5">
              <p>Round 3 starts at 4:30pm and winner are decided on sme day.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Prizes */}
      <section id="Prizes" className="text-center">
        <div className="container Fcontainer">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2>Prizes</h2>
              <div className="divider" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4">
              <div className="pricing-table">
                <h1 className="mt-4">Second</h1>
                <h4>winner will get Tablet and electronic gadgets.</h4>
              </div>
            </div>
            <div className="col-lg-4 text-white">
              <div className="pricing-table active">
                <h1 className="mt-4">First</h1>
                <h4>winner will get Laptop and trophy.</h4>
                <br />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-table">
                <h1 className="mt-4">Third</h1>
                <h4>Exciting gift and many mores.</h4>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
