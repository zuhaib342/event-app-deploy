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
    <div className={Styles.index}>
      <Navbar />
      <ToastContainer />
      {/* <getEvents/> */}
      <Eventing />


      {/* <LandingPage/> */}
    </div>




  )
}
