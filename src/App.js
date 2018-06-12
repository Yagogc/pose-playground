import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";

class Home extends Component {
  state = {
    isVisible: false
  };

  onHover = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <Wrapper>
        <Border>
          <BoxPosed
            pose={this.state.isVisible ? "visible" : "hidden"}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
          >
            <InnerBoxPosed />
            <InnerBoxPosed />
          </BoxPosed>
        </Border>
      </Wrapper>
    );
  }
}
const Link1 = ({ hostRef }) => {
  return (
    <WrapperPosed ref={hostRef} key="/link1">
      <Border>
        <BoxPosed pose="visible" initialPose="hidden">
          <InnerBoxPosed />
          <InnerBoxPosed />
        </BoxPosed>
      </Border>
    </WrapperPosed>
  );
};
const Link2 = ({ hostRef }) => {
  return (
    <WrapperPosed ref={hostRef} key="/link2">
      <Border>
        <BoxPosed pose="visible" initialPose="hidden">
          <InnerBoxPosed />
          <InnerBoxPosed />
        </BoxPosed>
      </Border>
    </WrapperPosed>
  );
};

class App extends Component {
  state = {
    isVisible: false
  };

  onHover = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
    console.log(this.state.isVisible);
  };

  render() {
    return (
      <Router>
        <Page>
          <Navbar>
            {/* <NavLink to="/">Link 0</NavLink> */}
            <NavLink to="/link1">Link 1</NavLink>
            <NavLink to="/link2">Link 2</NavLink>
          </Navbar>
          <Switch>
            <PoseGroup>
              {/* <RoutePosed exact path="/" component={Home} key="/" /> */}
              <Route key="/link1" path="/link1" component={Link1} />
              <Route key="/link2" path="/link2" component={Link2} />
            </PoseGroup>
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Navbar = styled.div`
  width: 100%;
  display: flex;
`;
const NavLink = styled(Link)`
  flex-grow: 1;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  color: #252525;
  font-weight: bold;
  &:visited {
    color: #252525;
  }
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  background: pink;
`;
const Border = styled.span`
  border: 1px solid blue;
`;
const Box = styled.span`
  height: 100px;
  width: 100px;
  padding: 10px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
const InnerBox = styled.span`
  height: 30px;
  width: 100%;
  background: green;
`;

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
};
const config2 = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 100
  }
};
const config3 = {
  enter: {
    opacity: 1,
    transition: {
      default: props => ({
        duration: 2000
      })
    }
  },
  exit: {
    opacity: 0
  }
};

const BoxPosed = posed(Box)(config);
const InnerBoxPosed = posed(InnerBox)(config2);
const WrapperPosed = posed(Wrapper)(config3);
