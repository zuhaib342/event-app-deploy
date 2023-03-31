import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Styles from '../styles/Home.module.css'
import Signup from '../pages/Signup'
import Navbar from './components/Navbar'
import Banner from './components/Slider'
import LandingPage from './components/Slider'
import Events from './Events'
import getEvents from './getEvents'
import Eventing from './getEvents'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{  backgroundImage: 'linear-gradient(to right,#2fbdff, #ff7582)' }} >
     <Navbar />
  <ToastContainer />
  

  <Image
    src="/image/bworksentertainment1217.jpg"
    alt="Cartoon graduates jump with happiness"
    quality={100}
    layout="fill"
  />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <Eventing />
    </div>




  )
}
