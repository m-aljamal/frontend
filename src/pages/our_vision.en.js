import React from "react"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
import OurVision from "../components/about/OurVision"
const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Our Vision" />
      <OurVision />
    </Layout>
  )
}

export default IndexPage
