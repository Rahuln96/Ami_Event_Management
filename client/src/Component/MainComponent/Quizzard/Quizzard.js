import React from 'react'
import './Quizzard.css';
import { Link } from 'react-router-dom';

export default function Quizzard() {
  return (

    <div>
      <div className='quizz1'>
        {/* <div id="header" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset={75}>
          <nav className="navbar navbar-quiz navbar-expand-lg fixed-top navbar-dark bg-dark navbar-quizd" id="navbar">
            <div className="container">
              <a className="navbar-brand logo-text" style={{ color: '#eadbdd' }} href="#home">Ambient Event</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                <span class="bi bi-caret-left"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="Categories">Categories</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Schedule">Schedule</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Prizes">Rewards</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fs-2" id="offcanvasExampleLabel">Ambient Event</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body " id="navbarNav">
              <ul className="navbar-nav ms-auto p-5 fs-4">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#categories">categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Schedule">Schedule</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Prizes">Rewards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* end offcanvas */}
        {/* header */}
        <section id="home" className="header-quiz">
          <div className="container">
            <div className="row">
              <div className="col-12 mx-auto">
                <h4 className="text-white ">WELCOME To Our Event</h4>
                <h1 className="text-white display-1 my-4 fw-bold ">Quizzard<br />Of OZ</h1>
                <a href="#" className=" glow-quiz">

                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section id="about-quiz" className=" text-center">
          <div className="container">
            <div className="row">
              <div className="col-12 intro text-center">
                <h2 className="fw-bold">About This Quiz</h2>
                <div className="divider" />
                <p className="fs-3">Show your knowledge about all the things literature, movie, Animals and many more at
                  Quizzard of OZ
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-sm-6 logo">
                <div>
                  <img height="300px" src="/img/image/pngegg.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 p-5">
                <h3 className="fw-bold">Sharp your brain</h3>
                <p className="fs-4">One way to keep your brain sharp is to exercise it with trivia . Build your own soft
                  skills
                </p>
              </div>
              <div className="col-lg-6 col-sm-6">
                <h3 className="fw-bold">Think Out of The Box</h3>
                <p className="fs-4">This enables us to think from different angles or simply to think out of the box</p>
              </div>
              <div className="col-lg-6 col-sm-6 logo">
                <div>
                  <img height="350px" src="/img/image/pngegg (1).png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 logo">
                <div>
                  <img height="350px" src="/img/image/knowledge.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 p-5">
                <h3 className="fw-bold">Fun way to gain knowledge</h3>
                <p className="fs-4">Quizzes improve or expand one's knowledge either general or in specific things, it promote
                  fun way
                  to learn
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* categories */}
        <section id="categories-quiz">
          <div className="container">
            <div className="row">
              <div className="col-12 intro text-center">
                <h2 className="fw-bold">Categories
                </h2>
                <div className="divider" />
                <p className="fs-3">Unique and fun Trivia categories</p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img height="500px" src="/img/image/UCd78vfC8vU.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">Time for Nature</h4>
                    <p className="card-text fs-5">Let's get deep into Planet Earth, The green giants, Animal species</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img height="500px" src="/img/image/pexels-joy-anne-pura-1186116.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">Art &amp; Culture</h4>
                    <p className="card-text fs-5">One thing is common in us that is culture</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img height="500px" src="/img/image/pexels-suzy-hazelwood-1130980.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">The world of Book</h4>
                    <p className="card-text fs-5">Poetry magic, Fiction Books, Historic speeches</p>
                  </div>
                </div>
              </div>
              <div className="col pt-5">
                <div className="card h-100">
                  <img height="500px" src="/img/image/pexels-david-henry-6436372.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">Political Recap</h4>
                    <p className="card-text fs-5">Test your knowledge on all of your politics, law , Fundamental rights</p>
                  </div>
                </div>
              </div>
              <div className="col pt-5">
                <div className="card h-100">
                  <img height="500px" src="/img/image/pexels-furknsaglam-3131406.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">It's just TV ; It's just Entertainment </h4>
                    <p className="card-text fs-5">How well do you know about movies, Music trivia, Sports &amp; News?</p>
                  </div>
                </div>
              </div>
              <div className="col pt-5">
                <div className="card h-100">
                  <img height="500px" src="/img/image/pexels-alesia-kozik-6772103.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">The Marketing Environment</h4>
                    <p className="card-text fs-5">The demographic, economic, natural, technological,political and cultural factors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div></section>
        {/* Quotes */}
        <section className="container-fluid quotes">
          <div className="container ">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active  text-white box_q">
                  <h1>“Faith is more than getting a theological quiz right. Faith is to know, to assent,
                    to put your trust in, and to cherish what is true.” ~ Kevin DeYoung</h1>
                </div>
                <div className="carousel-item  text-white box_2q">
                  <h1>“You can tell James Duthie to shove that quiz. I have a few other words
                    I can tell you about the quiz.” ~ John Tortorella</h1>
                </div>
                <div className="carousel-item text-white box_3q">
                  <h1>“There is no cramming for a test of character. It always comes as a pop quiz.” ~ Andy Stanley</h1>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        {/* Schedule */}
        <section id="schedule-quiz" className="schedule-quiz">
          <div className="container">
            <div className="row">
              <div className="col-12 intro text-center">
                <h1 className="fw-bold text-white ">Schedule of the event</h1>
                <div className="divider" />
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="main_q-timeline_q-4 text-white">
              <div className="timeline_q-4 q_left-4">
                <div className="card gradient_q-custom">
                  <div className="card-body p-4">
                    <i className="fas fa-brain fa-2x mb-3" />
                    <h1>Round 1 : Fun Visual Round</h1>
                    <p className="small text-white-50 mb-4" />
                    <p className="fs-4">Get some images of monuments, historical places, country flag, books,
                      longest, biggest,shortest, eminent personalities etc
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline_q-4 q_right-4">
                <div className="card gradient_q-custom-4">
                  <div className="card-body p-4">
                    <i className="fas fa-camera fa-2x mb-3" />
                    <h1> Rapid Fire Round</h1>
                    <p className="small text-white-50 mb-4" />
                    <p className="fs-4">This is time bound round.You go with unlimited questions in 1 min.Start with 1st team to last.
                      Prepared questions wisely short and less time taking.Team also say pass if they dont know
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline_q-4 q_left-4">
                <div className="card gradient_q-custom">
                  <div className="card-body p-4">
                    <i className="fas fa-campground fa-2x mb-3" />
                    <h1>Final &amp; Buzzer Round</h1>
                    <p className="small text-white-100 mb-4" />
                    <p className="fs-4">Questions level gone moderate to challenging. Questions are limited i.e. only 10 Question round.
                      No pass, if buzzers press there are only 2 situation 10 for right or 10 for wrong
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Rewards */}
        <section id="Prizes" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-12 intro text-center">
                <h2 className="pb-5 fw-bold">Rewards</h2>
                <div className="divider" />
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-6 text-white">
                <div className="pricing-table_q active">
                  <h1 className="mt-4">Winner</h1>
                  <h1>Cash Rewards of 10,000 for the winner.</h1>
                </div>
              </div>
              <div className="col-lg-6 text-white">
                <div className="pricing-table_q">
                  <h1 className="mt-4">Runner Up </h1>
                  <h1>Online Shopping coupons for the runner up worth 5000</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <footer className="text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <ul className="p-0">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#" /></li>
                  <li><a href="#" /></li>
                  <li><a href="#" /></li>
                </ul>
                <p className="my-3">Copyright 2022 © Designed by Ashwarya . All rights reserved.</p>
                <ul className="p-0">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer> */}

      </div>
    </div>

  )
}
