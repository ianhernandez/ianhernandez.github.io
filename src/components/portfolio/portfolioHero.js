import React from "react"
import styled from "styled-components"

const PortfolioHeroStyled = styled.header`
    background-color: #333;
    color: #fff;
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: 1fr 1fr;
    @media (min-width: 700px){
      min-height: 25rem;
      grid-template-columns: 1rem repeat(4, 1fr) 1rem;
      grid-template-rows: 1rem repeat(4, 1fr) 1rem;
    }
 
    @media (min-width: 1200px){
      height: calc(100vh - 9rem);
      grid-template-columns: 5rem repeat(4, 1fr) 5rem;
      grid-template-rows: 5rem repeat(4, 1fr) 5rem;
    }
    .portfolio-meta{
      align-self: end;
      margin-top: 0;
      z-index: 999;
      grid-row: 1;
      grid-column: 1;
      padding: 1rem;
      @media (min-width:700px){
        padding: 0;
        grid-column: 2 / span 2;
        grid-row: 4 / span 2;
        align-self: end;
      }
      

      ul{
        display: flex;
        flex-direction: row;
        list-style-type: none;
        padding: 0;
        margin:0;
        li{
          font-size: .9em;

           padding: .25em 1em;
           background-color: rgba(255,255,255,0.3);
           border-radius: 4rem;
           margin-right: .75em;
          @media (min-width: 600px){
            font-size 1.2em;
          }
          }
      }
    }

    h1{
      margin: 0;
      font-weight: 100;
      margin-bottom: .4rem;
      @media (min-width:1000px){
        font-size: 3em;
      }
    }
    .location{
      margin-bottom: 1rem;
      @media (min-width: 600px){
        font-size: 1.5em;
      }
    }
    .portfolio-logo{
      
      z-index: 999;
      background: #f2f2f2;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      @media (min-width:700px){
        grid-column: 4 / span 3;
        grid-row: 1 / span 6 ;
        align-self: stretch;
      }
      img{
        width: 100%;
        @media (max-width: 360px){
          max-width: 10rem;
        }
        max-width: 20rem;
      }
    }
    .portfolio-bg{
      grid-row: 1;
      grid-column: 1;
      z-index: 500;
      .gatsby-image-wrapper{
        height: 100%;
      }
      @media (min-width:700px){
        grid-column: 1 / span 3;
        grid-row: 1 / span 6;
      }
    }
    h1,h2,h3,h4,h5,h6{
      margin-top: 0;
    }
`

const PortFolioHero = ({ children }) => (
  <PortfolioHeroStyled>
    {children}
  </PortfolioHeroStyled>
)


export default PortFolioHero