import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { TopNav, HeroSection } from '../components/AboutPage'
import { FooterSection } from '../components/homePage'


const IndexPage = () => (
  <div>
    <Layout>
      <SEO title='About us' />
      <TopNav />
      <HeroSection/>
    </Layout>
    <FooterSection />
  </div>
)

export default IndexPage
