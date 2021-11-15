import React from 'react'

import MenuBar from 'components/MenuBar'
import Main from 'components/Main'
import SideBar from 'components/Sidebar'

import { Container, Wrapper } from './styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  )
}

export default Layout
