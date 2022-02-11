import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Paper} from "@mui/material";
import './LoginForm.less'
import {useDispatch, useSelector} from "react-redux";
import {setLoginFormFields} from "../../../Redux/actions/LoginActions";
import {getToken} from "../../../Redux/actions/AuthAction";

const LoginForm = () => {
  const dispatch = useDispatch()

  const inputFields = useSelector(state => {
    const {loginReducer} = state
    return loginReducer
  })


  function handleSubmit(event) {
    event.preventDefault();
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
    <div className="login-form">
      <Paper /*className={classes.padding}*/>
        <div /*className={classes.margin}*/>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                type="email"
                onChange={handleUsernameChange}
                fullWidth autoFocus required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
                fullWidth required
              />
            </Grid>
          </Grid>

          <Grid container justifyContent="center" style={{marginTop: '10px'}}>
            <Button
              onClick={handleSubmit}
              variant="outlined"
              color="primary"
              style={{textTransform: "none"}}
            >Login
            </Button>
          </Grid>
        </div>
      </Paper>
    </div>
  )
};

export default LoginForm;