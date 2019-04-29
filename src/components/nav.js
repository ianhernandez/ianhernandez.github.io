import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import MediaQuery from 'react-responsive';
import HamburgerMenu from 'react-hamburger-menu';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }
  render () {
    console.log(this.props)
    return (
      <>
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
      </>
    )
  }
}

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    
    &:only-child{
      padding: 1rem;
      @media (min-width: 1200px){
        padding: 3.5rem 5rem;
      }
      
      background-color: #000;
    }
    .brand{
        text-decoration: none;
        color: #fff;
        font-size: 1.618em;
    }

    .menu{
    padding: 0; margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;

        a{
            color: #fff;
            text-decoration: none;
            margin-left:2rem;
        }
    }
  `;





const Nav = () => (
  
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      
        <Navigation className="nav-menu">

          <Link to="/" className="brand">
          {data.site.siteMetadata.title}
          </Link>

          <MediaQuery query="(max-width: 800px">
            <Hamburger></Hamburger>
          </MediaQuery>

          <MediaQuery query="(min-width: 801px)">
          <ul className="menu">
            
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          </MediaQuery>
        </Navigation>
       
    )}
  />
)

export default Nav
