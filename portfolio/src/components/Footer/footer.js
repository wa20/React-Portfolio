import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

// class MobileContainer extends Component {
//   state = {}

//   handleSidebarHide = () => this.setState({ sidebarOpened: false })

//   handleToggle = () => this.setState({ sidebarOpened: true })

//   render() {
//     const { children } = this.props
//     const { sidebarOpened } = this.state

//     return (
//       <Media as={Sidebar.Pushable} at='mobile'>
//         <Sidebar.Pushable>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical
//             visible={sidebarOpened}
//           >
//             <Menu.Item as='a' active>
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>Work</Menu.Item>
//             <Menu.Item as='a'>Company</Menu.Item>
//             <Menu.Item as='a'>Careers</Menu.Item>
//             <Menu.Item as='a'>Log in</Menu.Item>
//             <Menu.Item as='a'>Sign Up</Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher dimmed={sidebarOpened}>
//             <Segment
//               inverted
//               textAlign='center'
//               style={{ minHeight: 350, padding: '1em 0em' }}
//               vertical
//             >
//               <Container>
//                 <Menu inverted pointing secondary size='large'>
//                   <Menu.Item onClick={this.handleToggle}>
//                     <Icon name='sidebar' />
//                   </Menu.Item>
//                   <Menu.Item position='right'>
//                     <Button as='a' inverted  disabled style={{ marginLeft: '0.5em' }}>
//                       Resume
//                     </Button>
//                   </Menu.Item>
//                 </Menu>
//               </Container>
//               <HomepageHeading mobile />
//             </Segment>

//             {children}
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </Media>
//     )
//   }
// }

// MobileContainer.propTypes = {
//   children: PropTypes.node,
// }

// const ResponsiveContainer = ({ children }) => (
//   /* Heads up!
//    * For large applications it may not be best option to put all page into these containers at
//    * they will be rendered twice for SSR.
//    */
//   <MediaContextProvider>
//     {/* <DesktopContainer>{children}</DesktopContainer> */}
//     <MobileContainer>{children}</MobileContainer>
//   </MediaContextProvider>
// )


const Footer = () => (
    // <ResponsiveContainer>
       <Segment inverted vertical style={{ padding: '5em 0em' }}> 
         <Container> 
           <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Contact' />
                <List link inverted>
                  <List.Item as='a'>LinkedIn</List.Item>
                  <List.Item as='a'>GitHub</List.Item>
                  <List.Item as='a'>Email</List.Item>
                </List>
              </Grid.Column>
              
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                Coding Proverb 101
                </Header>
                <p>
                Today, only God and I know why I wrote this code. Tomorrow, only God knows why I wrote this code.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid> 
         </Container> 
      </Segment> 
  //  </ResponsiveContainer>
  )
  
  export default Footer