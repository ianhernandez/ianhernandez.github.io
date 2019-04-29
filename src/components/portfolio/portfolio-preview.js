import React, { Component } from 'react';
import styled from 'styled-components';


const PortfolioImg = styled.img`
  position: -webkit-sticky;
  position: sticky;
  top: ${(props) => props.top}px;
`

class PortfolioPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSize: 30,
            imageHeight: 0,
        };
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
        let height = this.refs.portfImg.clientHeight;
        let calcHeight = (this.props.screenSize - height) / 2
        if (this.state.imageSize !== calcHeight ) {
            this.setState({ imageSize: calcHeight });
        }
    }

    render() {
        return (
            <>
                <PortfolioImg ref="portfImg" top={this.state.imageSize} src={this.props.src} />
            </>
        );
    }
}

export default PortfolioPreview;