import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import styled from "styled-components"
import PortfolioPreview from "../components/portfolio/portfolio-preview"
//import MediaQuery from 'react-responsive';

const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns:minmax(max-content, 1fr) minmax(auto, 30rem);
    padding: 1rem;
    grid-gap: 2rem;
    @media (min-width: 1200px){
      grid-template-columns:minmax(max-content, 1fr) minmax(auto, 50rem);
      padding: 5rem;
      grid-column-gap: 4rem;
    }
`;

const Companies = styled.ul`
    text-align: left;
    list-style-type: none;
    padding: 0; margin: 0;
`;

const Company = styled.li`
    font-size: 1.6em;
    font-weight: bold;
    @media (min-width: 800px){
      font-size: 2.2em;
    }

    @media (min-width: 1200px){ 
      font-size: 3em;
    }
    
    &:first-of-type a{
      padding-top: 0;
    }
    
    &:last-of-type a{
      padding-bottom: 0;
    }

    a{
      text-decoration: none;
      color: #ddd;
      padding: .5rem 0;
      display: block;
      @media (min-width: 800px){
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 5rem;
      }
      @media (min-width: 1400px){
        padding: 2.5rem 5rem 2.5rem 8rem;
      }
      &:hover{
          background: -webkit-linear-gradient(#0000FF, #3333FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }
`;

const Title = styled.h2`
      font-weight: 900;
      font-size: 2rem;
      @media (min-width: 800px){
        font-size: 5rem;
      }
      padding: 1rem;
      @media (min-width: 800px){
        padding: 2.5rem 5rem;
      }
      position: relative;
      &::after{
        content:"";
        height: 1rem;
        width: 1rem;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        bottom: 20px;
        clip-path: polygon(50% 5%, 0% 100%, 100% 100%);
      }
      &::before{
        content:"";
        height: 1rem;
        width: 1rem;
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        right: 10rem;
        clip-path: polygon(50% 5%, 0% 100%, 100% 100%);
      }
`;

const PortfolioWindow = styled.figure`
  margin: 0;
  @media (min-width: 800px){
    padding-right: 5rem;
  }
`;

class IndexPage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: 'https://i.postimg.cc/HxVyDF8M/Artboard-15.png',
      centerComputed: 0,
      
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }

  changePreview = (param) => (e) => { 
    this.setState({
      imgSrc: param
    });
  }

  render(){
    const { data } = this.props;
    
    return(
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero></Hero>
        <Title>Recent Work</Title>
        <PortfolioWrapper>
          <Companies>
            {data.allMarkdownRemark.edges.map(post => (
              <Company key={post.node.id}><Link onMouseOver={this.changePreview(post.node.frontmatter.preview)} to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></Company>
            ))}
          </Companies>
          <PortfolioWindow>
            <PortfolioPreview src={this.state.imgSrc} screenSize={this.state.height} />
          </PortfolioWindow>
        </PortfolioWrapper>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter{
            title
            path
            preview
          }
        }
      }
    }
  }
`

export default IndexPage
