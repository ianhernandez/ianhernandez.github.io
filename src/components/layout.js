import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import styled , { createGlobalStyle } from "styled-components"

const SiteWrapper = styled.div`
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/wuz8amg.css");

  body{
    font-family: proxima-nova, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
    font-weight: 100;
  }
  img{
    max-width: 100%;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyle />
      <SiteWrapper>
        <main>{children}</main>
        <Footer></Footer>
      </SiteWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
