import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import posed from 'react-pose';

class App extends Component {
  state = {
    isVisible: false
  }

  onHover = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
    console.log(this.state.isVisible)
  }

  render() {
    return (
      <Wrapper>
      <Border>
            <BoxPosed
              pose={this.state.isVisible ? 'visible' : 'hidden' }
              onMouseEnter={this.onHover}  
              onMouseLeave={this.onHover}
              // pose='visible'
              // initialPose='hidden'
            >
            <InnerBoxPosed />
            <InnerBoxPosed />
            </BoxPosed>
      </Border>
      </Wrapper>
    );
  }
}

export default App;
const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Border = styled.span`
  border: 1px solid blue;
`
const Box = styled.span`
  height: 100px;
  width: 100px;
  padding: 10px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`
const InnerBox = styled.span`
  height: 30px;
  width: 100%;
  background: green;
`

const config = {
  visible: {
    opacity: 1,
    delayChildren: 500,
    staggerChildren: 500
  },
  hidden: {
    opacity: 0,
    afterChildren: true,
    staggerDirection: -1,
    staggerChildren: 500
  }
}
const config2 = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 100
  }
}

const BoxPosed = posed(Box)(config);
const InnerBoxPosed = posed(InnerBox)(config2);