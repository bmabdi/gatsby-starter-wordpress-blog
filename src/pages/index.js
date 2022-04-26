import * as React from "react"
import Layout from "../components/Layout"
import Email from "../components/Email"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"


const IndexPage = () => (
 
  <Layout >
  <SEO title="Home" />
    <Hero />
    
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    
    <Email />
  </Layout>
)

export default IndexPage
