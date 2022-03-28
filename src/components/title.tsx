import React from 'react'
import styled from 'styled-components'

type typesPropsList = {
  children: any
}

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 250px;
`

const Title = ({ children }: typesPropsList) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
