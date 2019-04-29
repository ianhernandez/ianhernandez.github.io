//import { Link } from "gatsby"
import React from "react"
import Nav from "../components/nav"
import styled from "styled-components"

const StyledHero = styled.section`
  background-color: #000;
  height: 80vh;
  max-height: 30rem;
  @media (min-width: 640){
    min-height: calc(100vh - 2rem);
  }
  @media (min-width: 800px){
    min-height: calc(100vh - 10rem);
  }
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: min-content 1fr;
  padding: 1rem;
      @media (min-width: 800px){
        padding: 5rem;
      }
  grid-template-areas:
    "nav nav nav nav nav nav"
    "intro intro intro intro intro intro";
    
    .nav-menu{
      grid-area: nav;
    }

    .introduction{
      grid-area: intro;
      color: #fff;
      max-width: 65rem;
      align-self: end;
      padding-top: 1rem;
      @media (max-width: 800px){
        
        max-width: 40rem
        align-self: end;
        
      }
      h1{
        font-size: 2.875em;
        font-weight: 100;
        margin: 0;
      }
      p {
        font-size: 1em;
        line-height: 1.618;
        &:first-of-type{
          @media (min-width: 450px){
            font-size: 1.218em;
            
          }
          @media (min-width: 600px){
            font-size: 1.618em;
          }
          @media (min-width: 1000px){
            font-size: 2em;
          }
        }
        @media (max-width: 600px){
          &:last-of-type{
            max-width: 20rem;
          }
        }
        @media (min-width: 800px){
          font-size: 1.3em;
        }
        
        a{
          color: #fff;
        }
      }
    }
`;

const Hero = () => (
  <StyledHero>
    <Nav></Nav>
    <section className="introduction">
      <p>I’m Ian Hernandez, a front-end designer from Los Angeles, California developing for the web since the mid 2000’s. I’m passionate about brand, engineering, ux, and growth.</p>
      <p>You can find me on <a href="https://dribbble.com/ianhernandez">Dribbble</a>, <a href="https://github.com/ianhernandez">Github</a>, & <a href="https://www.linkedin.com/in/ianhernandez23/">LinkedIn</a>.</p>
    </section>
  </StyledHero>
)

export default Hero