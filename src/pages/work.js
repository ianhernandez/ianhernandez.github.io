import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"


const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;
  padding: 5rem;
`;



class Work extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <header><Nav></Nav></header>
        <WorkWrapper>
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}><Link to={post.node.frontmatter.path}><img src={post.node.frontmatter.preview} alt={post.node.title}/></Link></div>
          ))}
        </WorkWrapper>
      </Layout>
    )
  }
}

export const WorkQuery = graphql`
  query WorkQuery {
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

export default Work
