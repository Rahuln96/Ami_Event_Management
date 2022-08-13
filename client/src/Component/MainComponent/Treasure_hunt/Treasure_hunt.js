import React from 'react'
import { Link } from 'react-router-dom';
import './Treasure_module.css';

export default function About() {
  return (
    <div>
      <div className='treasure'>
      {/* navbar */}

      {/* <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" id="navbar">
          <div className="container">
            <a className="navbar-brand logo-text" style={{ color: '#EB1D36' }} href="#home">Ambient Event</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
              <span className="bi bi-caret-left" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                  <a className="nav-a" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/Games">Games</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/selection_1">selection_1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/Schedule_1">Schedule_1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/Rewards">Rewards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fs-2" id="offcanvasExampleLabel">AmiEvent</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body " id="navbarNav">
            <ul className="navbar-nav ms-auto p-5 fs-4">
              <li className="nav-item">
                <a className="nav-a" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Games">Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/selection_1">selection_1</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Schedule_1">Schedule_1</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Rewards">Rewards</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* end navbar */}

      {/* Home  */}
      <section id="home_1" className="home_1">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-2 mx-auto">
              <h4>WELCOME To Our Mega Event</h4>
              <h1 className=" display-1  fw-bold animate__animated animate__zoomInUp">Treasure Hunt</h1>
              <Link to="/Register" className=" m-5 glow_1">               
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* end home  */}

      {/* Guidelines */}
      <section id="about_1" className="bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2 className="fw-bold">Guidelines</h2>
              <div className="divider" />
              <p>Amity University Patna,Patna Campus
                is pleased to invite students to compete in Treasure Hunt ‘Your Instagram holds the key to
                the treasure’</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-sm-6 card_1">
              <div className="feature-box_1">
                <div className="icon-box_1"><img src="/img/body/10.png" alt="" /></div>
                <h5>Start</h5>
                <p>Treasure hunt, the idea of hunting for hidden treasures has always been exciting and
                  adventurous.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 card_1">
              <div className="feature-box_1">
                <div className="icon-box_1"><img src="/img/body/11.png" alt="" /></div>
                <h5>Team</h5>
                <p>. In treasure hunt, participants work in small teams to find the treasure with the
                  help of given clues. </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 card_1">
              <div className="feature-box_1">
                <div className="icon-box_1"><img src="/img/body/13.png" alt="" /></div>
                <h5>Decode</h5>
                <p>The team who decodes the clue and finds the treasure first will <br /> win the
                  game.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 intro text-center p-5">
                <h2 className="fw-bold">Concept of treasure hunt</h2>
                <div className="divider" />
                <p>The game of treasure hunt comes from the concept of scavenger hunting where
                  participants have to find number of items from the list provided to them.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 card_1">
              <div className="feature-box_1">
                <div className="icon-box_1"><img src="/img/body/12.png" alt="" /></div>
                <h5>differential factor</h5>
                <p>Treasure hunt
                  differentiates itself from scavenger hunting by providing given clues to find the treasure.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 card_1">
              <div className="feature-box_1">
                <div className="icon-box_1"><img src="/img/body/14.png" alt="" /></div>
                <h5>Digital era</h5>
                <p>In this digital era, treasure hunt games are organized online with the use of websites and
                  social
                  media handles..</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 card_1">
              <div className="feature-box_1">
                <div className="icon-box_1"><img src="/img/body/15.png" alt="" /></div>
                <h5>First treasure</h5>
                <p>The first Internet scavenger <br /> hunt was organized <br /> Rick Gates in 1992.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end of Guidelines */}

      {/* games */}

      <section id="games_1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2 className="fw-bold">games</h2>
              <div className="divider" />
              <p>These games are included</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="box_1">
                  <img src="/img/games/1.jpg" alt=" games" />
                  <div className="box_1-content">
                    <h3 className="title">Quiz</h3>
                    <span className="post">Web designer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="box_1">
                  <img src="/img/games/2.jpg" alt=" games" />
                  <div className="box_1-content">
                    <h3 className="title">Puzzel</h3>
                    <span className="post">Web designer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="box_1">
                  <img src="/img/games/3.jpg" alt=" games" />
                  <div className="box_1-content">
                    <h3 className="title">Cycling</h3>
                    <span className="post">Web designer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pt-4 col-sm-6">
                <div className="box_1">
                  <img src="/img/games/4.jpg" alt=" games" />
                  <div className="box_1-content">
                    <h3 className="title">Swimming</h3>
                    <span className="post">Web designer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pt-4 col-sm-6">
                <div className="box_1">
                  <img src="/img/games/5.jpg" alt=" games" />
                  <div className="box_1-content">
                    <h3 className="title">Racing</h3>
                    <span className="post">Web designer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pt-4 col-sm-6">
                <div className="box_1">
                  <img src="/img/games/6.jpg" alt=" games" />
                  <div className="box_1-content">
                    <h3 className="title">Treasure</h3>
                    <span className="post">Web designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end-games  */}

      {/* selection_1  */}
      <section id="selection_1" className="theme">
        <div className="container">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2 className="fw-bold">Process of selection</h2>
              <div className="divider" />
              <p>There will be total of 6 rounds.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-6 col-sm-12 card2">
              <div className="selection_1">
                <div className="icon-box_1"><img src="/img/body/q1.png" alt="" /></div>
                <div>
                  <h6>Round 1</h6>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, eius quia
                    assumenda corrupti voluptatum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 card2">
              <div className="selection_1">
                <div className="icon-box_1"><img src="/img/body/q2.png" alt="" /></div>
                <div>
                  <h6>Round 2</h6>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, eius quia
                    assumenda corrupti voluptatum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 card2">
              <div className="selection_1">
                <div className="icon-box_1"><img src="/img/body/q3.png" alt="" /></div>
                <div>
                  <h6>Round 3</h6>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, eius quia
                    assumenda corrupti voluptatum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 card2">
              <div className="selection_1">
                <div className="icon-box_1"><img src="/img/body/q4.png" alt="" /></div>
                <div>
                  <h6>Round 4</h6>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, eius quia
                    assumenda corrupti voluptatum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 card2">
              <div className="selection_1">
                <div className="icon-box_1"><img src="/img/body/q5.png" alt="" /></div>
                <div>
                  <h6>Round 5</h6>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, eius quia
                    assumenda corrupti voluptatum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 card2">
              <div className="selection_1">
                <div className="icon-box_1"><img src="/img/body/q6.png" alt="" /></div>
                <div>
                  <h6>Finale</h6>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, eius quia
                    assumenda corrupti voluptatum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end-selection_1 */}

      {/* Schedule_1  */}
      <section className="bg-light" id="Schedule_1">
        <div className="container">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2 className="fw-bold">Schedule of the event</h2>
              <div className="divider" />
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even</p>
            </div>
          </div>
        </div>
        <div className="timeline_1">
          <ul>
            <li>
              <div className="content">
                <h3>Round 1</h3>
                <p>Quiz</p>
              </div>
              <div className="point_1" />
              <div className="date" >
                <h4>Date</h4>
              </div>
            </li>
            <li>
              <div className="content" >
                <h3>Round 2</h3>
                <p>Puzzel</p>
              </div>
              <div className="point_1" />
              <div className="date" >
                <h4>Date</h4>
              </div>
            </li>
            <li>
              <div className="content" >
                <h3>Round 3</h3>
                <p>Cycling</p>
              </div>
              <div className="point_1" />
              <div className="date" >
                <h4>Date</h4>
              </div>
            </li>
            <li>
              <div className="content" >
                <h3>Round 4</h3>
                <p>Swimming</p>
              </div>
              <div className="point_1" />
              <div className="date" >
                <h4>Date</h4>
              </div>
            </li>
            <li>
              <div className="content" >
                <h3>Round 5</h3>
                <p>Racing</p>
              </div>
              <div className="point_1" />
              <div className="date" >
                <h4>Date</h4>
              </div>
            </li>
            <li>
              <div className="content" >
                <h3>Finale</h3>
                <p>Treasure Hunt</p>
              </div>
              <div className="point_1" />
              <div className="date">
                <h4>Date</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* end-Schedule_1  */}

      {/* Rewards */}

      <section id="prizes_1" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 intro text-center">
              <h2 className="pb-5 fw-bold">Rewards</h2>
              <div className="divider" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-6 text-white">
              <div className="rewards_1-table active">
                <h1 className="mt-4">Winner</h1>
                <h4></h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rewards_1-table">
                <h1 className="mt-4">Runner Up </h1>
                <h4>Online Shopping coupons for the runner up worth 5000</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end-rewards  */}

    </div>
    </div>
  );
}
