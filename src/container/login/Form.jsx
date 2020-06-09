import React, { useCallback, useState } from 'react'
import { MdMail, MdLock } from 'react-icons/md'
import Form from 'module/login/form'
import Input from 'component/login/form/Input'
import Remember from 'component/login/form/Toggle'
import Button from 'component/login/form/Submit'

function LoginFormContainer(props) {
  const { onLogin = () => {} } = props

  const inital = {
    email: '',
    password: '',
    remember: false,
  }

  const [loginFrmData, setLoginFrmData] = useState(inital)
  const { email, password, remember } = loginFrmData

  const onChange = useCallback(
    (e) => {
      setLoginFrmData({
        ...loginFrmData,
        [e.target.type]: e.target.value,
      })
    },
    [loginFrmData],
  )

  const onToggle = useCallback(
    (e) => setLoginFrmData({ ...loginFrmData, remember: e }),
    [],
  )

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onLogin(loginFrmData)
      setLoginFrmData(inital)
    },
    [inital],
  )

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
        required
        icon={MdMail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onChange}
        required
        icon={MdLock}
      />

      <Remember onToggle={onToggle} show={remember} />

      <Button />
    </Form>
  )
}

export default LoginFormContainer
