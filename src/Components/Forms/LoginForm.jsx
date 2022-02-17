import React from "react";
import {useDispatch} from "react-redux";
import {setLoginFormFields} from "../../Redux/actions/LoginFieldsActions";
import {auth} from "../../Redux/actions/AuthAction";
import {Button, Form, Input} from "antd";
import {rules} from "../../utils/rules";
import {debounce} from 'lodash'
import {useAuthSelector} from "../../Hooks/selectors/UseAuthSelector";
import {useFieldsSelector} from "../../Hooks/selectors/UseFieldsSelector";

const LoginForm = () => {
  const dispatch = useDispatch()

  const {isFetching} = useAuthSelector();


  const inputFields = useFieldsSelector()


  function handleSubmit() {
    dispatch(auth(inputFields))
  }

  const handleEmailChange = debounce((event) => {
    // console.log('handle user  >> ', event.target.value)
    dispatch(setLoginFormFields({email: event.target.value}))
  }, 200)

  const handlePasswordChange = debounce((event) => {
    // console.log('handle pass  >> ', event.target.value)
    dispatch(setLoginFormFields({password: event.target.value}))
  }, 200)
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  return (
    <Form
      {...formItemLayout}
      className="login-form"
      // style={{width:'500px'}}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input onChange={handleEmailChange}/>
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
        <Button type="primary" htmlType="submit" loading={isFetching}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default LoginForm;