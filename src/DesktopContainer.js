import PropTypes from 'prop-types'
import React, { useState } from 'react'
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
import AppMenu from './AppMenu'

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }


function DesktopContainer  ({children}) {
    // state = {}
  
   
    const [hideFixedMenu, setHideFixedMenu] = useState({ fixed: false })
  const [showFixedMenu, setShowFixedMenu] = useState({ fixed: true })
  const fixed = false
    // render() {
    //   const { children } = props
    //   const { fixed } = this.state
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          {/* <Visibility
            once={false}
            onBottomPassed={showFixedMenu}
            onBottomPassedReverse={hideFixedMenu}
          > */}
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 10, padding: '1em 0em' }}
              vertical
            >
              <AppMenu/>
              {/* <HomepageHeading /> */}
              {/* {children} */}
            </Segment>
          {/* </Visibility> */}
  
          {children}
        </Responsive>
      )
    }
  export default DesktopContainer