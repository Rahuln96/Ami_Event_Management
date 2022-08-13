// import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './Component/Header/Header'
import Footer from './Component/Header/Footer'
import Home from './Component/MainComponent/Home'
import Treasure_hunt from './Component/MainComponent/Treasure_hunt/Treasure_hunt'
import Quizzard from './Component/MainComponent/Quizzard/Quizzard'
import Register from './Component/Header/Register'
// import Games from './Component/MainComponent/Games';
import Code_vita from './Component/MainComponent/Code_Vita/Code_Vita';
import Web_Dev from './Component/MainComponent/Web_Dev/Web_Dev';
import Login from './Component/MainComponent/Login';
import Signup from './Component/MainComponent/Signup';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';


function App() {
     const [ user, setLoginUser] = useState({})
  return (
       <BrowserRouter>
       <Header />
          <Routes>
               <Route path='/' element = {<Home />} />
               <Route path='/Treasure_hunt' element = {<Treasure_hunt />} />             
               <Route path='/Quizzard' element = {<Quizzard />} />
               <Route path='/Register' element ={user && user._id ? <Register setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>}/>
               <Route path='/Web_Dev' element ={<Web_Dev/>}/>
               <Route path='/Code_vita' element ={<Code_vita/>}/>
               <Route path='/Login' element ={<Login setLoginUser={setLoginUser}/>}/>
               <Route path='/Signup' element ={<Signup/>}/>


          </Routes>
       
       <Footer />
       </BrowserRouter>
  );
}

export default App;
