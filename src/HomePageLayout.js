
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
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as='h1'
//       content='Imagine-a-Company'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//       }}
//     />
//     <Header
//       as='h2'
//       content='Do whatever you want when you want to.'
//       inverted
//       style={{
//         fontSize: mobile ? '1.5em' : '1.7em',
//         fontWeight: 'normal',
//         marginTop: mobile ? '0.5em' : '1.5em',
//       }}
//     />
//     <Button primary size='huge'>
//       Get Started
//       <Icon name='right arrow' />
//     </Button>
//   </Container>
// )

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */


DesktopContainer.propTypes = {
  children: PropTypes.node,
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({children}) => (
  <ResponsiveContainer>
    {children}
  </ResponsiveContainer>
)
export default HomepageLayout



























// import PropTypes from 'prop-types'
// import React, { useState } from 'react'
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Responsive,
//   Segment,
//   Sidebar,
//   Visibility,
// } from 'semantic-ui-react'
// import SearchContainer from './SearchContainer'
// // import SearchContainer from './SearchContainer'


// // Heads up!
// // We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// // For more advanced usage please check Responsive docs under the "Usage" section.
// const getWidth = () => {
//   const isSSR = typeof window === 'undefined'

//   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
// }

// function HomepageLayout ({children}) {

//   const [hideFixedMenu, setHideFixedMenu] = useState({ fixed: false })
//   const [showFixedMenu, setShowFixedMenu] = useState({ fixed: true })
//   const fixed = false

//     return (
//       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
//         <Visibility
//           once={false}
//           onBottomPassed={showFixedMenu}
//           onBottomPassedReverse={hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign='center'
//             style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? 'top' : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size='large'
//             >
//               <Container>
//                 <Menu.Item as='a' active>
//                   Home
//                 </Menu.Item>
//                 <Menu.Item as='a'>Work</Menu.Item>
//                 <Menu.Item as='a'>Company</Menu.Item>
//                 <Menu.Item as='a'>Careers</Menu.Item>
//                 <Menu.Item position='right'>
//                   <Button as='a' inverted={!fixed}>
//                     Log in
//                   </Button>
//                   <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
//                     Sign Up
//                   </Button>
//                 </Menu.Item>
//               </Container>
//             </Menu>
          
//             {children}
//           </Segment>
//         </Visibility>

      
//       </Responsive>
//     )
// }

// HomepageLayout.propTypes = {
//   children: PropTypes.node,
// }

// export default HomepageLayout