import React from 'react';
import {Button, Form, Input,} from 'antd';
import {rules} from "../../utils/rules";
import {signup} from "../../Redux/actions/SignUpAction";
import {useDispatch} from "react-redux";
import {useSignupSelector} from "../../Hooks/selectors/UseSignupSelector";
import {useSignupFieldsSelector} from "../../Hooks/selectors/UseSignupFieldsSelector";
import {debounce} from "lodash";
import {setSignupFormFields} from "../../Redux/actions/SignupFieldsActions";
import {formItemLayout, tailFormItemLayout} from "./Consts";


const SignUpForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const {isSignupFetching} = useSignupSelector();
  const onFinish = (values) => {
    dispatch(signup(values))
  };
  const {email, password, secondPassword} = useSignupFieldsSelector()

  const handleEmailChange = debounce((event) => {
    dispatch(setSignupFormFields({email: event.target.value}))
  }, 200)

  const handlePasswordChange = debounce((event) => {
    dispatch(setSignupFormFields({password: event.target.value}))
  }, 200)

  const handleSecondPasswordChange = debounce((event) => {
    dispatch(setSignupFormFields({secondPassword: event.target.value}))
  }, 200)


  return (
    <Form
      {...formItemLayout}
      form={form}
      className="signup-form"
      onFinish={onFinish}
      scrollToFirstError
      initialValues={{
        email: email,
        password: password,
        secondPassword: secondPassword
      }}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          rules.typed('email', 'The input is not valid E-mail!'),
          rules.required('Please input your E-mail!'),
        ]}
      >
        <Input onChange={handleEmailChange} />
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
        <Input.Password onChange={handlePasswordChange}/>
      </Form.Item>

      <Form.Item
        name="secondPassword"
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
        <Input.Password onChange={handleSecondPasswordChange} />
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