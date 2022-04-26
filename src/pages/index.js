import * as React from "react"
import Layout from "../components/layout"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"


const IndexPage = () => (
 
  <Layout >
  <Seo title="Home" />
    <Hero />
    
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    
    <Email />
  </Layout>
)

export default IndexPage
