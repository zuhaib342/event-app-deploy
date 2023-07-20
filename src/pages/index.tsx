import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Styles from '../styles/Home.module.css'
import Signup from '../pages/Signup'
import Navbar from './components/Navbar'
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
    width={600}
    height={400}
    layout="responsive"
    />
 
  <Eventing />
    </div>




  )
}