/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";


const avatar = require("./assets/me-bws.jpg").default;

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});


class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 50, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a">Home</Menu.Item>
                <Menu.Item as="a" active>
                About
            </Menu.Item>
                <Menu.Item as="a">Portfolio</Menu.Item>
                <Menu.Item as="a">Contact</Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    disabled
                    inverted={!fixed}
                    negative={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Resume
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a">Home</Menu.Item>
            <Menu.Item as="a" active>
                About
            </Menu.Item>
            <Menu.Item as="a">Portfolio</Menu.Item>
            <Menu.Item as="a">Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              
              inverted
              textAlign="center"
              style={{ minHeight: 50, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button
                      as="a"
                      inverted
                      disabled
                      style={{ marginLeft: "0.5em" }}
                    >
                      Resume
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              {/* <HomepageHeading mobile /> */}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const About = () => (

  
  <ResponsiveContainer>
{/* Body */}
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Hey, I'm Wael!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Former media and insight anaylyst in the world consumer data now turned <b>Full Stack Web Developer</b>.
              If I'm not behind a laptop coding away building websites then 
              I'm outdoors with my trusty SLR snapping the world around me.
             
            </p>
            {/* <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p> */}
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='big' src={ avatar } alt="jpg joe"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    
{/* Footer */}
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contact" />
              <List link inverted>
                <List.Item as="a"><Icon name='linkedin'/> LinkedIn</List.Item>
                <List.Item as="a"><Icon name='github'/> GitHub</List.Item>
                <List.Item as="a"><Icon name='mail'/> Email</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Coding Proverb 101
              </Header>
              <p>
                Today, only God and I know why I wrote this code. Tomorrow, only
                God knows why I wrote this code.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);


export default About;
