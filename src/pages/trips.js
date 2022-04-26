import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Trips from "../components/Trips"

const TripsPage = () => (
  <Layout>
    <SEO title="Trips" />
    <Trips heading="Our Favorite Destinations" />
  </Layout>
)

export default TripsPage
