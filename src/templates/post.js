import React from 'react';
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import PortfolioHero from "../components/portfolio/portfolioHero"
import styled from 'styled-components'

const PortfolioPost = styled.section`
    padding: 1rem;
    @media (min-width: 600px){
      padding: 5rem;
    }
`

const ThePost = styled.article`
  max-width: 50em;
  margin: 0 auto;
  @media (min-width: 600px){
      font-size: 1.3em;
  }

  h1{
    font-size: 1.6em;
    @media (min-width: 820px){
      font-size: 2em;
    }
    @media (min-width: 1200px){
      font-size: 3.2em;
    }
  }

  .gatsby-resp-image-link + em, p > img + em{
    display: block;
    padding: 1em;
    background-color: #f9f9f9;
    margin-top: 1rem;
    text-transform: none;
    font-weight: 100;
    font-style: normal;
    text-align: center;
    color: #777;
  }

  p{
    line-height: 1.6;
    margin-bottom: 3em;
  }

  table{
    width: 100%;
    border-spacing: 0;
  }

  .twitter-tweet-rendered{
    margin: 0 auto;
  }
  .embedVideo-container{
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    iframe{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const PortfolioHeader = styled.header`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
      <PortfolioHeader>
        <div><Nav /></div>
        <PortfolioHero>
          <div className="portfolio-meta">
            <h1>{post.frontmatter.title}</h1>
            <div className="location">{post.frontmatter.location}</div>
            <ul>
              <li>Branding</li>
              <li>Front-End Development</li>
            </ul>
          </div>
          <div className="portfolio-bg"><Img fluid={post.frontmatter.hero.childImageSharp.fluid}/></div>
          <div className="portfolio-logo"><img src={post.frontmatter.logo.childImageSharp.sizes.src} alt=""/></div>
          
        </PortfolioHero>
      </PortfolioHeader>
      <PortfolioPost>
        <ThePost dangerouslySetInnerHTML={{__html: post.html}} />
      </PortfolioPost>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        location
        hero {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2000 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo {
          publicURL
          childImageSharp {
            sizes(maxWidth: 600 ) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`