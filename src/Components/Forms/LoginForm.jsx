import React from "react";
import {useDispatch} from "react-redux";
import {setLoginFormFields} from "../../Redux/actions/LoginFieldsActions";
import {auth} from "../../Redux/actions/AuthAction";
import {Button, Form, Input} from "antd";
import {rules} from "../../utils/rules";
import {debounce} from 'lodash'
import {useAuthSelector} from "../../Hooks/selectors/UseAuthSelector";
import {useLoginFieldsSelector} from "../../Hooks/selectors/UseLoginFieldsSelector";
import {formItemLayout} from "./Consts";

const LoginForm = () => {
  const dispatch = useDispatch()
  const {isFetching} = useAuthSelector();
  const {email, password} = useLoginFieldsSelector()

  function handleSubmit() {
    dispatch(auth({email, password}))
  }

  const handleEmailChange = debounce((event) => {
    dispatch(setLoginFormFields({email: event.target.value}))
  }, 200)

  const handlePasswordChange = debounce((event) => {
    dispatch(setLoginFormFields({password: event.target.value}))
  }, 200)

  return (
    <Form
      {...formItemLayout}
      className="login-form"
      onFinish={handleSubmit}
      initialValues={{
        email,
        password
      }}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          rules.typed('email', 'Ваш Email введен неправильно!!'),
          rules.required('Пожалуйста введите ваш Email!')
        ]}
      >
        <Input onChange={handleEmailChange}/>
      </Form.Item>

      <Form.Item
        label='Пароль'
        name="password"
        rules={[
          rules.required('Пожалуйста введите ваш пароль!'),
          ({}) => ({
            validator(_, value) {
              let withUpperSymb = false
              const stringValue = [...value]
              stringValue.forEach((symb) => {
                  if (symb === symb.toUpperCase() && symb.match(/^[a-zа-яё]+$/i))
                    withUpperSymb = true
                }
              )
              if (
                (3 < stringValue.length && stringValue.length < 11)
                && withUpperSymb
                || !(stringValue.length > 0)
              ) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароль должен содержать от 3 до 10 символов и 1 заглавную букву!'));
            },
          })
        ]}
      >
        <Input.Password onChange={handlePasswordChange}/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" loading={isFetching}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
};

export default LoginForm;