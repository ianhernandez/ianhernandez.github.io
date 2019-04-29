import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SiteFooter = styled.footer`
    background-color: #f2f2f2;
    color: #222;
    padding: 1rem;
    @media (min-width: 800px){
        padding: 5rem;
    }
`;

const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    ul{
        list-style-type: none;
        padding: 0; margin: 0;
        li{
            padding-bottom: 1rem;
            a{
                text-decoration: none;
                color: #777;
            }
        }
    }
    .site-author{
        display: flex;
        flex-direction: column;
        h4{
            margin-top: 1rem;
            padding: 0;
        }
        small{
            font-size: 1em;
            mb
        }
        span{
            font-size: 1em;
        }
        & > * {
            margin-bottom: 1rem;
        }
    }

    .elsewhere-menu, .here-menu{
        justify-self: end;
    }
`;

class Footer extends Component {
    render() {

        return (
            <SiteFooter>
                <FooterWrapper>
                    <div className="site-author">
                        <h4>Ian Hernandez</h4>
                        <small>Creative Director / Front-End Designer</small>
                        <span>Los Angeles, California</span>
                    </div>
                    <div className="here-menu">
                        <h3>Here</h3>
                        <ul className="menu">
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
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
                    </div>
                    <div className="elsewhere-menu">
                    <h3>Elsewhere</h3>
                        <ul className="menu">
                            <li>
                                <a href="https://dribbble.com/ianhernandez">Dribbble</a>
                            </li>
                            <li>
                                <a href="https://github.com/ianhernandez">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ianhernandez23/">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://behance.net/ianhernandez">Behance</a>
                            </li>
                        </ul>
                    </div>
                </FooterWrapper>

            </SiteFooter>
        );
    }
}

export default Footer;