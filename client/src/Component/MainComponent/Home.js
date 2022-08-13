// Niralawebsolution.com / Website design & Development service Noida India
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Link } from 'react-router-dom'
export default function Home( {setLoginUser}) {
  const form = useRef()
  // const sendEmail = () => {};
  
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3k2vlf6', 'template_vu1ekw8', form.current, 'gBZj93777dwekYqWL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert('Your Message has been submit Successfull ')
        // document.write('Your Message has been successfull')
    };
  return (
    <React.Fragment>
      <div >
        <section className="home" id="home">
          <div className="content">
            <h3 className="animate__animated animate__rotateIn">Explore the magical world of <span> AmiEvent</span>
            </h3>
            <Link to="/Login" target="_blank" className="btn12">Login</Link>
            
          </div>
          {/* <div className="swiper-container home-slider animate__animated animate__heartBeat animate__delay-2s">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src="./images/code.jpg" alt="" /></div>
              <div className="swiper-slide"><img src="images/cover.jpg" alt="" /></div>
              <div className="swiper-slide"><img src="images/webdev.png" alt="" /></div>
              <div className="swiper-slide"><img src="images/quiz.png" alt="" /></div>

            </div>
          </div> */}
        </section>
        {/* home section ends */}
        {/* service section starts  */}
        {/* service section ends */}
        {/* about section starts  */}
        <section className="about " id="about">
          <h1 className="heading"><span>about</span> us </h1>
          <div className="row">
            <div className="image">
              <img src="https://atlassianblog.wpengine.com/wp-content/uploads/2021/06/brand-5991-t2_7-icebreakers-to-help-your-team-build-meaningful-connections_v2_1120x545px@2x.png" alt="" />
            </div>
            <div className="content">
              <h3>we will give a very special creative events for you</h3>
              <p>We provide fun events services to college/university.We have some ongoing events and upcoming events and partners who help us provide the best and most cost effective event to our clients. our focus is to align your event objectives with modern concepts to deliver creative and engaging event expriences.</p>

              {/* <Link to="/" className="btn">contact us</Link> */}
            </div>
          </div>
        </section>
        {/* about section ends */}
        {/* gallery section starts  */}
        <section className="gallery" id="gallery">
          <h1 className="heading">our <span>gallery</span></h1>
          <div className="box-container">
            <div className="box">
              <img src="images/g-1.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-2.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-3.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-4.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-5.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-6.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-7.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-8.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
            <div className="box">
              <img src="images/g-9.jpg" alt="" />
              <h3 className="title">photos and events</h3>
              <div className="icons">
                <Link to="/" className="fas fa-heart" />
                <Link to="/" className="fas fa-share" />
                <Link to="/" className="fas fa-eye" />
              </div>
            </div>
          </div>
        </section>
        {/* gallery section ends */}
        {/* price section starts  */}
        <section className="price" id="price">
          <h1 className="heading"> Ongoing <span>Event</span> </h1>
          <div className="container-fluid row d-flex justify-content-around box-container">
            <div className="box col-md-2 m-1">
              <h3 className="title">Treasure Hunt</h3>
              <h3 className="amount" />
              <ul>
                <li><i className="fas fa-check" />full services</li>
                <li> <i className="fas fa-check" /> decorations </li>
                <li> <i className="fas fa-check" /> music and photos </li>
                <li> <i className="fas fa-check" /> food and drinks </li>
                <li> <i className="fas fa-check" /> invitation card </li>
              </ul>
              <Link to="/" className="btn12">check out</Link>
            </div>
            <div className="box col-md-3">
              <h3 className="title">Web Development</h3>
              <h3 className="amount"></h3>
              <ul>
                <li><i className="fas fa-check" />full services</li>
                <li> <i className="fas fa-check" /> decorations </li>
                <li> <i className="fas fa-check" /> music and photos </li>
                <li> <i className="fas fa-check" /> food and drinks </li>
                <li> <i className="fas fa-check" /> invitation card </li>
              </ul>
              <Link to="/" className="btn">check out</Link>
            </div>
            <div className="box col-md-3">
              <h3 className="title">Code-A-Vita</h3>
              <h3 className="amount"></h3>
              <ul>
                <li><i className="fas fa-check" />full services</li>
                <li> <i className="fas fa-check" /> decorations </li>
                <li> <i className="fas fa-check" /> music and photos </li>
                <li> <i className="fas fa-check" /> food and drinks </li>
                <li> <i className="fas fa-check" /> invitation card </li>
              </ul>
              <Link to="/" className="btn">check out</Link>
            </div>
            <div className="box col-md-3">
              <h3 className="title">Quiz</h3>
              <h3 className="amount"></h3>
              <ul>
                <li><i className="fas fa-check" />full services</li>
                <li> <i className="fas fa-check" /> decorations </li>
                <li> <i className="fas fa-check" /> music and photos </li>
                <li> <i className="fas fa-check" /> food and drinks </li>
                <li> <i className="fas fa-check" /> invitation card </li>
              </ul>
              <Link to="/" className="btn">check out</Link>
            </div>
          </div>
        </section>
        {/* price section ends */}
        {/* review section starts  */}
        {/* <section className="reivew" id="review"> */}
        {/* <h1 className="heading">Upcoming <span>Events</span></h1> */}

        <section className="service" id="service">
            <h1 className="heading"> Upcoming <span>Events</span> </h1>
            <div className="box-container">
              <Link to="harshit.html" target="_blank">
                <div className="box">
                  {/* <img src="images/g-1.jpg" alt="" width="content cover"> */}
                  <i className="fas fa-map-marker-alt" />
                  <h3>venue selection</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
                </div>
              </Link>
              <div className="box">
                <i className="fas fa-envelope" />
                <h3>invitation card</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
              </div>
              <div className="box">
                <i className="fas fa-music" />
                <h3>entertainment</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
              </div>
              <div className="box">
                <i className="fas fa-utensils" />
                <h3>food and drinks</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
              </div>
              <div className="box">
                <i className="fas fa-photo-video" />
                <h3>photos and videos</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
              </div>
              <div className="box">
                <i className="fas fa-birthday-cake" />
                <h3>custom food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
              </div>
            </div>
          </section>












        {/* <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="0"
              class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://icdn.isrgrajan.com/in/2018/03/Story-Writing-Competition.jpg" class="d-block w-100 h-50"
                alt="Wild Landscape" />
              <div class="carousel-caption d-none d-md-block text-dark font-weight-bold">
                <h1>Story Writing Competition</h1>
                <h2>Here all the participants will be given a few lines and they have to form a whole story of around
                  2000 to 3000 words. The genre can be different, from same lines the story can be horror,
                  romance, comedy and tragedy and the judge will decide whose story has created an impact on the
                  mind.</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://icdn.isrgrajan.com/in/2018/03/Short-Film-Making.jpg" class="d-block w-100"
                alt="Camera" />
              <div class="carousel-caption d-none d-md-block text-danger font-weight-bold">
                <h1>Story Writing Competition</h1>
                <h2>Here all the participants will be given a few lines and they have to form a whole story of around
                  2000 to 3000 words. The genre can be different, from same lines the story can be horror,
                  romance, comedy and tragedy and the judge will decide whose story has created an impact on the
                  mind.</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://icdn.isrgrajan.com/in/2018/03/Poetry-writing-and-recitation.jpg" class="d-block w-100"
                alt="Exotic Fruits" />
              <div class="carousel-caption d-none d-md-block text-dark font-weight-bold">
                <h1>Story Writing Competition</h1>
                <h2>Here all the participants will be given a few lines and they have to form a whole story of around
                  2000 to 3000 words. The genre can be different, from same lines the story can be horror,
                  romance, comedy and tragedy and the judge will decide whose story has created an impact on the
                  mind.</h2>
              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
        {/* </section> */}
        {/* review section ends */}
        {/* contact section starts  */}
        <section className="contact" id="contact">
          <h1 className="heading"> <span>contact</span> us </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputBox">
              <input type="text" name='name' placeholder="name" />
              <input type="email" name='email' placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" name='number' placeholder="number" />
              <input type="text" name='subject' placeholder="subject" />
            </div>
            <textarea name='textarea' placeholder="your message" id cols={30} rows={10} defaultValue={""} />
            <input type="submit"  defaultValue="send message" className="btn12" />
          </form>
        </section>
      </div>
    </React.Fragment>
  )
}


