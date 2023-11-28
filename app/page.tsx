"use client"
import React from 'react'
import NavBar from '@/components/templates/Home/Navbar/NavBar'
import Main from '@/components/templates/Home/Main/Main'
import VideoSection from '@/components/templates/Home/VideoSection/VideoSection'
import Proses from '@/components/templates/Home/Proses/Proses'
import Goal from '@/components/templates/Home/Goal/Goal'
import ServicesContainer from '@/components/templates/Home/Services/Service'
import Where from '@/components/templates/Home/Where/Where'
import AboutMetaNext from '@/components/templates/Home/AboutMetaNext/AboutMetaNext'
import Customer from '@/components/templates/Home/Customer/Customer'
import Blog from '@/components/templates/Home/Blogs/Blog'
import Concat from '@/components/templates/Home/Concat/Concat'
import CallUS from '@/components/templates/Home/CallUs/CallUS'

export default function Page() {
  return (
    <>
      <Main/>
      <VideoSection/>
      <Proses/>
      <Goal/>
      <ServicesContainer/>
      <Where/>
      <AboutMetaNext/>
      <Customer/>
      <Blog/>
      <Concat/>
      <CallUS/>
    </>
  )
}
