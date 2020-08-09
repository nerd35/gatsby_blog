import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { TopNav, HeroSection, NewTabNav } from '../components/AboutPage'
import { FooterSection } from '../components/homePage'
import Header from '../components/header'


const AboutPage = () => (
  <div>
      <SEO title='About us' />
      <TopNav />
      <Header/>
      <HeroSection/>
      <NewTabNav/>
    <FooterSection />
  </div>
)

export default AboutPage
