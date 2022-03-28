import React from 'react'
import styled, { css } from 'styled-components'
import { ButtonProps } from 'reactstrap'

type typesPropsList = {
  primary: boolean
  disabled: boolean
  color: string
  background: string
  width: string
}

const StyledButton = styled.button`
  display: block;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  line-height: 22px;
  height: 60px;
  font-weight: 700;
  margin: 20px auto;
  cursor: pointer;

  ${(props: typesPropsList) =>
    props.primary &&
    css`
      color: ${(props: typesPropsList) => props.color || '#000'};
      background: ${(props) =>
        props.disabled ? '#99a9ff' : props.background || '#f5f5f5'};
      width: ${(props) => props.width || '200px'};
    `}
`

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  ...props
}) => {
  return <StyledButton<any> {...props} />
}

export default Button
