import React, {useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {useModalSelector} from "../../Hooks/selectors/UseModalSelector";
import {useDispatch} from "react-redux";
import {setModalActive} from "../../Redux/actions/ModalAction";
import {rules} from "../../utils/rules";
import {useAuthSelector} from "../../Hooks/selectors/UseAuthSelector";
import {useLoginFieldsSelector} from "../../Hooks/selectors/UseLoginFieldsSelector";
import {changePassword} from "../../Redux/actions/ChangePasswordAction";

const ChangePassModal = () => {
  const {active} = useModalSelector()
  const dispatch = useDispatch()
  const {email} = useLoginFieldsSelector()
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const {accessToken} = useAuthSelector()

  const handleOk = () => {
    dispatch(setModalActive(false));
    dispatch(changePassword(email, oldPassword, password, accessToken))
  };
  const handleCancel = () => {
    dispatch(setModalActive(false));
  };
  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }
  function handleOldPasswordChange(e) {
    setOldPassword(e.target.value)
  }

  return (
    <>
      <Modal title="Изменение пароля" visible={active} onOk={handleOk} onCancel={handleCancel}>
        <Form
          className="change-pass-loader"
        >
          <Form.Item
            label='Старый пароль'
            name="oldPassword"
            rules={[rules.required('Пожалуйста введите ваш действующий пароль!')]}
          >
            <Input.Password onChange={handleOldPasswordChange}/>
          </Form.Item>
          <Form.Item
            label='Новый пароль'
            name="newPassword"
            rules={[
              rules.required('Пожалуйста введите ваш новый пароль!'),
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
            <Input.Password/>
          </Form.Item>
          <Form.Item
            label='Подтверждение'
            name="secondPassword"

            rules={[
              rules.required('Пожалуйста подтвердите ваш новый пароль'),
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Введенные вами пароли не совпадают!'));
                },
              }),
            ]}
          >
            <Input.Password onChange={handlePasswordChange}/>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default ChangePassModal;