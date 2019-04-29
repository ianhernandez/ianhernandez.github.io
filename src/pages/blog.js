import React from "react"
import { Link } from "gatsby"
//import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
        <header><Nav></Nav></header>
        <div>
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></div>
          ))}
        </div>
      </Layout>
    )
  }
}

export const BlogQuery = graphql`
  query BlogQuery {
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

export default Blog
