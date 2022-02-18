import React, {useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {useModalSelector} from "../../Hooks/selectors/UseModalSelector";
import {useDispatch} from "react-redux";
import {setModalActive} from "../../Redux/actions/ModalAction";
import {rules} from "../../utils/rules";
import {useAuthSelector} from "../../Hooks/selectors/UseAuthSelector";
import {useFieldsSelector} from "../../Hooks/selectors/UseFieldsSelector";
import {changePassword} from "../../Redux/actions/ChangePasswordAction";

const ChangePassModal = () => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const {active} = useModalSelector()
  const dispatch = useDispatch()
  const {email} = useFieldsSelector()
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
          className="login-form"
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
            rules={[rules.required('Пожалуйста введите ваш новый пароль!')]}
          >
            <Input.Password />
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