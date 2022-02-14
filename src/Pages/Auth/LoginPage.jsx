import React from 'react';
import AccountMenu from "../../Components/main/Menu/AccountMenu";
import {Layout, Row} from "antd";
import LoginForm from "../../Components/Forms/Login/LoginForm";
import {getToken} from "../../Redux/actions/AuthAction";
import {useDispatch} from "react-redux";


const LoginPage = () => {
  const dispatch = useDispatch()
  function handleSubmit(event) {
    // event.preventDefault();
    dispatch(getToken({username:'a', password:'b'}))
  }

  return (

    <div style={{width: '80vw'}}>

      <Layout>
        <AccountMenu styles={{marginTop: '20'}}/>
        <Row justify="center" align='middle' className="h100">
          <LoginForm/>
        </Row>
      </Layout>
    </div>
  );
};

export default LoginPage;