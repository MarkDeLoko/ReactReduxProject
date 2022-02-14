import React from "react";
import './LoginForm.less'
import {useDispatch, useSelector} from "react-redux";
import {setLoginFormFields} from "../../../Redux/actions/LoginActions";
import {getToken} from "../../../Redux/actions/AuthAction";
import {Button, Form, Input} from "antd";
import {rules} from "../../../util/rules";

const LoginForm = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(state => {
    const {authReducer} = state
    return authReducer.isFetching
  })

  const inputFields = useSelector(state => {
    const {loginReducer} = state
    return loginReducer
  })


  function handleSubmit(event) {
    // event.preventDefault();
    // console.log(inputFields)
    dispatch(getToken(inputFields))

  }

  function handleUsernameChange(event) {
    // console.log('handle user  >> ', event.target.value)
    dispatch(setLoginFormFields({username: event.target.value}))
  }

  function handlePasswordChange(event) {
    // console.log('handle pass  >> ', event.target.value)
    dispatch(setLoginFormFields({password: event.target.value}))
  }

  return (
    <Form
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input onChange={handleUsernameChange}/>
      </Form.Item>

      <Form.Item
        label='Password'
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password onChange={handlePasswordChange}/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button  type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default LoginForm;