import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import {HeroSection, PartnerSection, HelpfulSection, BusinessSolution, GetInTouch, TestimonialSection,  LatestNewsSection, NewsLetterSection, FooterSection} from '../components/homePage'

const IndexPage = () => (
    <div>
      <Layout>
        <SEO title="Home" />
        <HeroSection />
        <PartnerSection />
        <HelpfulSection />
        <BusinessSolution/>
      </Layout>
      <GetInTouch/>
      <TestimonialSection/>
      <LatestNewsSection/>
      <NewsLetterSection/>
      <FooterSection/>
  </div>
)

export default IndexPage
