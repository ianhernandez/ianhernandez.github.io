import React from 'react';
import PropTypes from 'prop-types';
import styled from styled-components;

const Button = styled.a`

  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

render(
  <div>
    <Button
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
      primary
    >
      GitHub
    </Button>

    <Button as={Link} href="/docs" prefetch>
      Documentation
    </Button>
  </div>
)
export default button;