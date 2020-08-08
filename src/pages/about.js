import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { TopNav, HeroSection, TabSection } from '../components/AboutPage'
import { FooterSection } from '../components/homePage'
import Header from '../components/header'


const IndexPage = () => (
  <div>
      <SEO title='About us' />
      <TopNav />
      <Header/>
      <HeroSection/>
      <TabSection/>
    <FooterSection />
  </div>
)

export default IndexPage
