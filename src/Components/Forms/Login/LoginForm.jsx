import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Paper} from "@mui/material";
import './LoginForm.less'

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};
const LoginForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <div className="login-form">
      <Paper /*className={classes.padding}*/>
        <div /*className={classes.margin}*/>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md={true} sm={true} xs={true}>
              <TextField id="username" label="Username" type="email" fullWidth autoFocus required/>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md={true} sm={true} xs={true}>
              <TextField id="username" label="Password" type="password" fullWidth required/>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" style={{marginTop: '10px'}}>
            <Button variant="outlined" color="primary" style={{textTransform: "none"}}>Login</Button>
          </Grid>
        </div>
      </Paper>
    </div>
  )
};

export default LoginForm;