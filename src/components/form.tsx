import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import Button from './button'
import API from '../api/index'
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledInputCheckbox,
  StyledSpanCheckbox,
  StyledDiv,
  Styledp,
} from './form.components'

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const history = useHistory()

  const [signInErrors, setSignInErrors] = useState({
    loginError: '',
    passwordError: '',
  })

  const [isDisableSubmitButton, setIsDisableSubmitButton] = useState(false)

  const onSubmit = async (data: any) => {
    setIsDisableSubmitButton(true)

    const signIn = await API.user.getByLogin(data.login, data.password)
    setIsDisableSubmitButton(false)

    if (typeof signIn === 'undefined') {
      setSignInErrors((prevState) => ({
        ...prevState,
        loginError: `Пользователя ${data.login} не существует`,
      }))
      return
    }

    if (signIn.login === data.login) {
      setSignInErrors((prevState) => ({
        ...prevState,
        loginError: '',
      }))
    }

    if (signIn.password !== data.password) {
      setSignInErrors((prevState) => ({
        ...prevState,
        passwordError: `Неверный пароль`,
      }))
    } else {
      setSignInErrors((prevState) => ({
        ...prevState,
        passwordError: '',
      }))
    }

    if (signIn.login === data.login && signIn.password === data.password) {
      history.push('/profile')
    }
  }

  return (
    <>
      <StyledDiv>
        {signInErrors.loginError && signInErrors.loginError !== '' && (
          <Styledp>{signInErrors.loginError}</Styledp>
        )}
      </StyledDiv>

      <StyledDiv>
        {signInErrors.passwordError && signInErrors.passwordError !== '' && (
          <Styledp>{signInErrors.passwordError}</Styledp>
        )}
      </StyledDiv>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel<any>>
          Логин <StyledInput {...register('login', { required: true })} />
          <div style={{ height: 20, marginTop: 10 }}>
            {errors?.login && (
              <p style={{ color: 'rgb(226, 111, 111)' }}>Обязательное поле</p>
            )}
          </div>
        </StyledLabel>

        <StyledLabel<any>>
          Пароль <StyledInput type="password" {...register('password')} />
        </StyledLabel>

        <StyledLabel flexDirection="row" style={{ alignItems: 'flex-end' }}>
          <StyledInputCheckbox
            {...register('checkbox')}
            type="checkbox"
            value="Запомнить пароль"
          />
          <StyledSpanCheckbox />
          Запомнить пароль
        </StyledLabel>

        <Button
          disabled={isDisableSubmitButton}
          type="submit"
          primary
          color={'#fff'}
          background={'#4a67ff'}
          width={'640px'}
        >
          Войти
        </Button>
      </StyledForm>
    </>
  )
}

export default Form
