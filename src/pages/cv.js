import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Cv = styled.section`
  padding: 5rem;
  max-width: 50rem;
  margin: 0 auto;
  p{
      line-height: 1.6;
  }
  .experience--list{
      padding: 0;
      margin: 0;
      list-style: none;
  }
  .experience--single{
      display: grid;
      grid-template-columns:1fr 1fr;
      grid-gap: 1rem;
      margin-bottom: 2rem;
      .experience--single_description{
          grid-column: span 2;
      }
      h2,h3,h4,h5{
          padding: 0;
          margin: 0;
      }
      .work-title{
          font-weight: 300;
      }
      .work-time{
          text-align: right;
          font-weight: 800;
      }
      .work-city{
          text-align: right;
      }
  }
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Resume" />
    <header><Nav></Nav></header>
    <Cv>
        <div className="cv--section skills">
          <h2>Skills</h2>
          <p><strong>Front-end Design</strong>: UI development, HTML/CSS architecture, UX, Accessibility, Prototyping (in the browser, or with tools such as Figma, Adobe XD, Sketch).</p>
            <p>Knowledgable in modern JavaScript (ES6+), PHP. Frameworks such as React, Vue & some Angular.</p>
        </div>
        <div className="cv--section professional-experience">
          <h2>Professional Experience</h2>
          <ul className="experience--list">
            <li className="experience--single">
                <h3 className="work-name">Karman Healthcare</h3>
                <time className="work-time">2010</time>
                <h4 className="work-title">Web Designer / Online Marketer</h4>
                <span className="work-city">City Of Industry, California</span>
                <div className="experience--single_description">
                    <p>In charge of redesigning the company's website. Distilled and migrated 100+ product page data from their static Microsoft FrontPage based website. Developed new corporate site with WordPress. Used custom fields to create an easier, but customizable process for updating product content and data.</p>
                    <p>Took product photography & videos, created ads, and handled general IT related tasks. Worked with their sales manager to crawl, scrape and scrub potential customer leads nationwide. From which fax, snail mail, and email campaigns (aweber) were created, sent, and tracked on a near weekly basis.</p>
                </div>
            </li>

            <li className="experience--single">
                <h3 className="work-name">Cloud Magazine</h3>
                <time className="work-time">2011</time>
                <h4 className="work-title">Designer / Front-End Developer</h4>
                <span className="work-city">Riverside, California</span>
                <div className="experience--single_description">
                <p>Southern California based counter-culture magazine (10k /mo circulation). Started designing layouts and graphics for their editorials and advertisements on behalf of their advertisers.</p>
                <p>Later, managed a network of WordPress blogs & PHP powered "web 2.0" properties. Worked with founder exploring and understanding StumbleUpon and it's algorithms to spark viral traffic to our network  of websites. Iteratively designed and tested viral content based themes (think icanhascheezburger) which was used to earn some of our clients over a million page views ytd.</p>
                </div>
            </li>          
            
            <li className="experience--single">
                <h3 className="work-name">Nouveau Studios</h3>
                <time className="work-time">2012</time>
                <h4 className="work-title">Co-Founder / Creative Director</h4>
                <span className="work-city">Downtown LA, California</span>
                <div className="experience--single_description">
                <p>One of three co-founders. Worked together in growing the company to include 8 employees, complete 50+ projects and earn the top 3 ranking on Yelp for <u>Web Design</u> in <u>Los Angeles</u> for nearly 3 years.</p>
                <p>Early roles included research, strategy, planning, design & front-end development. Later focused primiarly on creative direction, design and facilitating communication between clients and our marketing & dev teams.</p>
                </div>
            </li>            
                        
            <li className="experience--single">
                <h3 className="work-name">Shout Q</h3>
                <time className="work-time">2014</time>
                <h4 className="work-title">Chief Creative Officer / Co-Founder</h4>
                <span className="work-city">Los Angeles, California</span>
                <div className="experience--single_description">
                <p>An eBay-like marketplace for brands and influencers to buy and sell shout outs. Created early prototypes and investor deck before successfully raising funding for our iOS application.</p>
                <p>Lead creative & strategy. Created brand identity, app icon, ui and interaction designs. Created the marketing site for the app. Utilized previous relationships with musicians to help seed our initial base of influencers.</p>
                </div>
            </li> 
                        
            <li className="experience--single">
                <h3 className="work-name">Vape Holdings Inc.</h3>
                <time className="work-time">2015</time>
                <h4 className="work-title">Front-End Developer / Designer</h4>
                <span className="work-city">Woodland Hills, California</span>
                <div className="experience--single_description">
                <p>After having sold our company, to Vape Holdings Inc. our team was integrating into the day to day operations at the company. In addition to existing roles at nouveau new roles included branding, packaging and front-end development for the companies consumer products and services.</p>
                </div>
            </li> 
                                
            <li className="experience--single">
                <h3 className="work-name">New Hair Institute</h3>
                <time className="work-time">2016</time>
                <h4 className="work-title">Front-end Developer / Content Editor</h4>
                <span className="work-city">Los Angeles, California</span>
                <div className="experience--single_description">
                <p>Redesigned and developed the company's WordPress website. Focus was given to content architecture, UX and user research to help create a cohesive flow to increase conversions.</p>
                <p>Helped aggregate various print, photo and video content for the company to post onto their website and social channels (primarily Facebook, YouTube, Reddit).</p>
                </div>
            </li> 
                                
            <li className="experience--single">
                <h3 className="work-name">The Studio Brand</h3>
                <time className="work-time">2016</time>
                <h4 className="work-title">Partner / Chief Marketing Officer</h4>
                <span className="work-city">Monrovia, California</span>
                <div className="experience--single_description">
                <p>Designed the company's corporate identity, packaging and custom Shopify based website. Became an equity partner. Primarly focused on marketing and growth. Drove sales through Instagram by developing quality photos of our products, creating relationships with influencers, shout out accounts and potential customers through likes, comments and DMs. Grew account to over 6.7K+ followers organically.</p>
                <p>Worked closely with the CEO in strategizing growth and potentially expanding into new markets. Helped the company pivot into a successful merger with Division XII a company in similiarly burgeoning industry.</p>
                </div>
            </li> 
                        
            <li className="experience--single">
                <h3 className="work-name">Division XII</h3>
                <time className="work-time">2018</time>
                <h4 className="work-title">Partner / Chief Marketing Officer</h4>
                <span className="work-city">Los Angeles, California</span>
                <div className="experience--single_description">
                <p>Stategized and designed the company's visual identity and message on the web. Lead marketing, branding and packaging for over 50+ SKUs in the companies catalog spread amongst 4 sub-brands.</p>
                <p>Managed several Instagram accounts, got products into the hands of influencers and photographers to help fuel the content we post onto our feeds.</p>
                </div>
            </li> 
          </ul>
        </div>
        <div className="cv--section internships mini--timeline_list">
          <h2>Internships</h2>
          <ul>
            <li><time>Summer 2009</time> — College Web Media
              <ul>
                <li><em>Walnut, California</em> — Dedicated to serving the needs and interests of college students and the college-minded by providing a range of services and products.</li>
                <li>Worked on design and front-end for their video platform ("Custom" PHP Video CMS + JWPlayer).</li>
              </ul>
            </li>
            <li><time>Summer 2010</time> — Dim Mak Records
              <ul>
                <li><em>Hollywood, California</em> — Lead street team in weekly guerilla marketing campaigns for Dim Mak's weekly event Dim Mak Tuesday's.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="cv--section education mini--timeline_list">
          <h2>Education</h2>
          <ul>
            <li><time>2006-2010</time> — John A. Rowland High School
              <ul>
                <li>Honors, Advanced Placement, Student Council (Officer of Technology)</li>
                <li>TV/Video Broadcasting Certificate — La Puente Valley Regional Occupational Program </li>
              </ul>
            </li>
            <li><time>2010-2012</time> — Pasadena City College
              <ul>
                <li>Curricular Focus: Photography / Film, 2D Design, Screen Printing</li>
              </ul>
            </li>
          </ul>
        </div>
    </Cv>
  </Layout>
)

export default SecondPage
