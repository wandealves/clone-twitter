import React from 'react'
import StickyBox from 'react-sticky-box'

import List from 'components/List'
import FollowSuggestion from 'components/FollowSuggestion'
import News from 'components/News'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion key={1} name="Joaquim" nickname="@joaquim" />,
              <FollowSuggestion
                key={2}
                name="Luke Cage"
                nickname="@lukecage"
              />,
              <FollowSuggestion key={3} name="Maria" nickname="@maria" />
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News key={0} />,
              <News key={1} />,
              <News key={2} />,
              <News key={3} />,
              <News key={4} />,
              <News key={5} />,
              <News key={6} />,
              <News key={7} />,
              <News key={8} />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
