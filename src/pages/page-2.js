import React from "react"
import { Link } from "gatsby"
//import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Header></Header>
    <Hero></Hero>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
