import React from 'react'

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  RocketseatIcon,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>C3PO</strong>
            <span>@c3po</span>
            <Dot />
            <time>20 de jun</time>
          </Header>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
