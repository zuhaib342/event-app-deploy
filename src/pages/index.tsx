import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Signup from '../pages/Signup'
import Navbar from './components/Navbar'
import Banner from './components/Slider'
import LandingPage from './components/Slider'
import Events from './Events'
import getEvents from './getEvents'
import Eventing from './getEvents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Navbar/>
    {/* <getEvents/> */}
    <Eventing />


     {/* <LandingPage/> */}
  

    </>
  )
}
