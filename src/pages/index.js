import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/homePage/heroSection"
import PartnerSection from "../components/homePage/partnerSection"
import HelpfulSection from "../components/homePage/helpfulSection"
import BusinessSolution from "../components/homePage/businessSolution"
import GetInTouch from '../components/homePage/getInTouch'

const IndexPage = () => (
  <div>
    <div>
      <Layout>
        <SEO title="Home" />
        <HeroSection />
        <PartnerSection />
        <HelpfulSection />
        <BusinessSolution/>
        <GetInTouch/>
      </Layout>
    </div>
  </div>
)

export default IndexPage
