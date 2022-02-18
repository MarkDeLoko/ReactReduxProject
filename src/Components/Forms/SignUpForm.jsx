import React from 'react';
import {Button, Form, Input,} from 'antd';
import {rules} from "../../utils/rules";
import {signup} from "../../Redux/actions/SignUpAction";
import {useDispatch} from "react-redux";
import {useSignupSelector} from "../../Hooks/selectors/UseSignupSelector";


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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUpForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const {isSignupFetching} = useSignupSelector();
  const onFinish = (values) => {
    dispatch(signup(values))
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      className="signup-form"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          rules.typed('email', 'The input is not valid E-mail!'),
          rules.required('Please input your E-mail!'),
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
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
            }
          }),
        ]}
        hasFeedback
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Подтвердите"
        dependencies={['password']}
        hasFeedback
        rules={[
          rules.required('Пожалуйста подтвердите ваш пароль!'),
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Введенные вами пароли не совпадают!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={isSignupFetching}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;