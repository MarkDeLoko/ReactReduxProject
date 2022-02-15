import React from 'react';
import AccountMenu from "../../Components/main/Menu/AccountMenu";
import {Layout, Row} from "antd";
import LoginForm from "../../Components/Forms/Login/LoginForm";
import {getToken} from "../../Redux/actions/AuthAction";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";


const LoginPage = () => {
  const dispatch = useDispatch()
  function handleSubmit(event) {
    // event.preventDefault();
    dispatch(getToken({username:'a', password:'b'}))
  }
  const location = useLocation()
  const navigate = useNavigate()

  const fromPage = location.state?.from?.pathname || '/';
  return (

    <div style={{width: '80vw'}}>

      <Layout>
        <AccountMenu />
        <Row justify="center" align='middle' className="h100">
          <LoginForm/>
          {fromPage}
        </Row>
      </Layout>
    </div>
  );
};

export default LoginPage;