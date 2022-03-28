import React from 'react'
import styled from 'styled-components'
import Title from '../../components/title'
import { Link } from 'react-router-dom'
import Button from '../../components/button'

interface IMyProps {
  primary: boolean
}

const StyledText = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`

const StyledLogin = styled.span`
  display: inline;
  font-weight: 600;
`

export const Profile: React.FC<IMyProps> = () => {
  return (
    <>
      <Title>ONLY.</Title>
      <StyledText>
        Здравствуйте, <StyledLogin>steve.jobs@example.com</StyledLogin>
      </StyledText>
      <Link style={{ textDecoration: 'none' }} to="/login">
        <Button primary>Выйти</Button>
      </Link>
    </>
  )
}
