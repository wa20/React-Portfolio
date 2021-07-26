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
  Card,
} from "semantic-ui-react";
import "./style.css";
import projects from "./projects.js";

const js = require("./assets/logo/js.png").default;
const css3 = require("./assets/logo/css3.png").default;
const express = require("./assets/logo/express.png").default;
const html5 = require("./assets/logo/html5.png").default;
const jquery = require("./assets/logo/jquery.png").default;
const mongodb = require("./assets/logo/mongodb.png").default;
const mysql = require("./assets/logo/mysql.png").default;
const node = require("./assets/logo/node.png").default;
const react = require("./assets/logo/react.png").default;




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
                <Menu.Item href="/Home" as="a">
                  Home
                </Menu.Item>
                <Menu.Item href="/About" as="a">
                  About
                </Menu.Item>
                <Menu.Item href="/Portfolio" as="a" active>
                  Portfolio
                </Menu.Item>
                <Menu.Item href="/Contact" as="a">
                  Contact
                </Menu.Item>
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
            <Menu.Item href="/Home" as="a">
              Home
            </Menu.Item>
            <Menu.Item href="/About" as="a">
              About
            </Menu.Item>
            <Menu.Item href="/Portfolio" as="a" active>
              Portfolio
            </Menu.Item>
            <Menu.Item href="/Contact" as="a">
              Contact
            </Menu.Item>
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

const Portfolio = () => (
  <ResponsiveContainer>
    {/* Body */}

    <Segment style={{ padding: "0em" }} vertical >
      <Grid celled="internally" columns="equal" stackable className="border">
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          ></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container className="400px;">
        <Header textAlign="center" as="h3" style={{ fontSize: "2em" }}>
          Work
        </Header>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <Icon name="folder open" />
          {/* Work  */}
        </Divider>

        <div className="flexRow ">
          {projects.map((project) => (
            <Grid.Row>
              <div className="project">
                <Card>
                  <Image
                    src={`${project.image}`}
                    className="wrapper"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>{project.project}</Card.Header>
                    {/* <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta> */}
                    <Card.Description>{projects.detail}</Card.Description>
                  </Card.Content>

                  <Button.Group attached="bottom">
                    <Button href={`${project.repo}`} color="black">
                      <Icon disabled name="github" /> View Repo
                    </Button>

                    <Button href={`${project.deployment}`} color="black">
                      <Icon disabled name="tv" /> View Project
                    </Button>
                  </Button.Group>
                </Card>
              </div>
            </Grid.Row>
          ))}
        </div>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
        </Divider>

        <Header textAlign="center" as="h3" style={{ fontSize: "2em" }}>
          Languages
        </Header>

        <Grid celled="internally" columns="equal" stackable style={{ padding: "3em 0em" }}>
          <Grid.Row textAlign="center" >
           <Image.Group>
             <Image size="tiny" wrapped src={ js } alt=""/>
             <Image size="tiny" wrapped src={ css3 } alt="" />
             <Image size="tiny" wrapped src={ html5} alt="" />
             <Image size="tiny" wrapped src={jquery } alt="" />
             <Image size="small" wrapped src={ node } alt="" />
             <Image size="small" wrapped src={ express } alt="" />
             <Image size="small" wrapped src={ mysql } alt="" />
             <Image size="small" wrapped src={ mongodb } alt="" />
             <Image size="small" wrapped src={ react } alt="" />

             </Image.Group>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical >
      <Grid celled="internally" columns="equal" stackable className="border">
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          ></Grid.Column>
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
                <List.Item as="a">
                  <Icon name="linkedin" /> LinkedIn
                </List.Item>
                <List.Item as="a">
                  <Icon name="github" /> GitHub
                </List.Item>
                <List.Item as="a">
                  <Icon name="mail" /> Email
                </List.Item>
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

export default Portfolio;
