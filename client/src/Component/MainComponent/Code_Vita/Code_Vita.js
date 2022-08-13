// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
import './Code_A_Vita.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <div>
      <div className='code_vita'>
        {/* HOME */}
        <div className="container-fluid b2x1" id="home">
          <p className="tex">It's Coding Time</p>
          <h1 className="text1 animate__animated animate__flip animate__delay-1s">CODE-A-VITA</h1>
          <div className="bt">
            <Link to="/Register" className="glow">
              REGISTER NOW
            </Link>
          </div>
        </div>
        {/* HOME */}
        {/* ABOUT */}
        <div className="container b2x2" id="about">
          <h5 className="text4 abt">Amity University Patna,Patna Campus is pleased to invite students to compete in CODE-A-VITA .<br /> Your Knowledge is the Key to Success</h5>
          <h2 className="text4">Concept Of Coding</h2>
          <div className="row text-white">
            <div className="col-lg-4 col-md-12 col-12 text-center bord p-5">
              <h3>Variables</h3>
              <p>As the foundation of any computer programming language, variables act as “containers” that “hold” information. These containers then store this information for later use</p>
            </div>
            <div className="col-lg-4 col-md-12 col-12 text-center bord p-5">
              <h3>Data Structures</h3>
              <p>Data structures allow programmers to streamline data collection when a large amount of related information is involved.</p>
            </div>
            <div className="col-lg-4 col-md-12 col-12 text-center bord p-5">
              <h3>Control Structures</h3>
              <p>A control structure analyzes variables and selects a direction in which to go determined from the given parameters. For example, when a computer program is running, the code is being read by the computer line by line from top to bottom and (for the most part) left to right.</p>
            </div>
            <div className="col-lg-4 col-md-12 col-12 text-center text5 bord p-5">
              <h3>Syntax</h3>
              <p>Just like in the English language, computer programming follows a syntax or a set of rules that define particular layouts of letters and symbols. Proper syntax ensures the computer reads and interprets code accurately.</p>
            </div>
            <div className="col-lg-4 col-md-12 col-12 text-center bord p-5">
              <h3>Tools</h3>
              <p> A tool in computer programming is a piece of software that helps programmers write code much faster.</p>
            </div>
          </div>
        </div>
        {/* ABOUT */}
        {/* LANGUAGES */}
        <div className="back">
          <div className="container mt" id="language">
            <div className="row">
              <div className="col-md-6 col-md-6-cv">
                <div className="card lng card-1 text-center">
                  <h3>C</h3>
                  <p>C is a high-level and general-purpose programming language that is ideal for developing firmware or portable applications. Originally intended for writing system software, C was developed at Bell Labs by Dennis Ritchie for the Unix Operating System in the early 1970s</p>
                </div>
              </div>
              <div className="col-md-6 col-md-6-cv">
                <div className="card lng card-2 text-center">
                  <h3>C++</h3>
                  <p>C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented, functional, and so on. This makes C++ powerful as well as flexible.</p>
                </div>
              </div>
              <div className="col-md-6 col-md-6-cv">
                <div className="card lng card-4 text-center">
                  <h3>JAVA</h3>
                  <p>Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages.</p>
                </div>
              </div>
              <div className="col-md-6 col-md-6-cv">
                <div className="card lng card-5 text-center">
                  <h3>PYTHON</h3>
                  <p>Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.</p>
                </div>
              </div>
              <div className="col-md-6 col-md-6-cv cad">
                <div className="card lng card-3 text-center">
                  <h3>C-SHARP</h3>
                  <p>The name "C sharp" was inspired by the musical notation whereby a sharp symbol indicates that the written note should be made a semitone higher in pitch. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LANGUAGES */}
        {/* GUIDELINES */}
        <div className="container text-center b2x4" id="guidelines">
          <h1 style={{ color: 'black' }}>GUIDELINES</h1>
          <div className="container py-5">
            <div className="main-timeline-4 text-white">
              <div className="timeline-4 left-4">
                <div className="card gradient-custom">
                  <div className="card-body p-4">
                    <i className="fas fa-brain fa-2x mb-3" />
                    <h2>Round 1</h2>
                    <p>Round 1 will be taken online. <br /> The Questions will be multiple choice questions <br /><span className="txt1">Time limit = 30 minutes</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-4 right-4">
                <div className="card gradient-custom-4">
                  <div className="card-body p-4">
                    <i className="fas fa-camera fa-2x mb-3" />
                    <h2>Round 2</h2>
                    <p>Round 2 will be Questions/Answers.<br /><span className="txt1">Time limit = 1 hour</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-4 left-4">
                <div className="card gradient-custom">
                  <div className="card-body p-4">
                    <i className="fas fa-campground fa-2x mb-3" />
                    <h2>Round 3</h2>
                    <p>Round 3 or Final round will be the last round in which the contestant will be given 2 Questions.<br />In which it will be ask to write Programs / Codes.<br /><span className="txt1">Time limit = 1 hour</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h4 className="text-decoration-underline">NOTICE</h4>
            <p>In case of tie in Round 3 , an extra round will be done.<br />This extra round will be on choice of the judges.</p>
          </div>
        </div>
        {/* GUIDELINES */}
        {/* SCHEDULE */}
        <div className="container-fluid b2x5" id="schedule">
          <div className="row mb-5">
            <h1 className="text-center text6 text-decoration-underline">Schedule</h1>
            <div className="col-lg-4 col-md-4 col-12 bord2 p-5">
              <h2 className="text-center">Round 1</h2>
              <p>Date :- XX/XX/XXXX<br /> Time :- XX PM<br />Venue :- Online</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 bord2 p-5">
              <h2 className="text-center">Round 2</h2>
              <p>Date :- XX/XX/XXXX<br /> Time :- XX PM<br />Venue :- Amity Campus</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 bord2 p-5">
              <h2 className="text-center">Round 3</h2>
              <p>Date :- XX/XX/XXXX<br /> Time :- XX PM<br />Venue :- Amity Campus</p>
            </div>
          </div>
        </div>
        {/* SCHEDULE */}
        {/* PRIZE */}
        <div className="container-fluid prz" id="prizes">
          <div className="row text-center">
            <h1 className="text14"><img src="./../img/Trophy.png" alt="" className="pic" />Prize Time</h1>
            <div className="col-lg-4 col-md-4 col-sm-12 bord1 mb-5">
              <h2>WINNER</h2>
              <h5>Winner will get an <span className="text7"><br />MacBook Pro 16-inch</span>.</h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bord1 mb-5 b2x6">
              <h2>1<sup>st</sup> RunnerUp</h2>
              <h5>1<sup>st</sup> RunnerUp will get <span className="text7"><br />Dell Inspiron 14 5000</span>.</h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bord1 mb-5 b2x7">
              <h2>2<sup>nd</sup> RunnerUp</h2>
              <h5>2<sup>nd</sup> RunnerUp will get cash prize of<span className="text7"><br />Rs. 20000/-</span>.</h5>
            </div>
          </div>
        </div>
        <br />
        {/* PRIZE */}
        {/* CONTACT */}
        <div className="container-fluid b2x8" id="contact">
          <h1 className="text-center text8">Team CODE-A-VITA</h1>
          <p className="text-center text9 fs-5">Coordinator :- "XXXXX XXXXXXX" <br />Contact No. :- XXXXXXXXXX <br /> E-mail :- xxxxxxxxx@gmail.com</p>
        </div>
        {/* CONTACT */}
      </div>
    </div>

  )
}
