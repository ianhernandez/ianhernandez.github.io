import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Contact = styled.section`
  padding: 5rem;
  max-width: 50rem;
  margin: 0 auto;
  min-height: 20rem;
  }
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <header><Nav></Nav></header>
    <Contact>
        <h1>Get In Touch</h1>
        <p>You can contact me at ianhernandez23@gmail.com</p>
    </Contact>
  </Layout>
)

export default SecondPage
