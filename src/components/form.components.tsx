import styled from 'styled-components'

type typesPropsList = {
  flexDirection: string
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label`
  display: flex;
  width: 640px;
  margin: 10px auto;
  flex-direction: ${(props: typesPropsList) => props.flexDirection || 'column'};
`

export const StyledInput = styled.input`
  width: 600px;
  padding: 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background: #f5f5f5;
  margin-top: 10px;
`

export const StyledInputCheckbox = styled.input`
  display: none;

  &:checked + span:before {
    opacity: 1;
  }
`

export const StyledSpanCheckbox = styled.span`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  margin-right: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 14px;
    height: 14px;
    background: #4a67ff;
    border-radius: 2px;
    opacity: 0;
    transition: 0.2s;
  }
`

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
`

export const Styledp = styled.p`
  width: 640px;
  height: 60px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;

  &:before {
    content: '!';
    background: #ffc8c8;
    color: #ee6565;
    border-radius: 100%;
    margin-right: 10px;
    padding: 2px 8px;
  }
`
