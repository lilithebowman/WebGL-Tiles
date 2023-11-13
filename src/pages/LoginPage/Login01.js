import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  TextField
} from "@material-ui/core";
import Axios from "axios";
import wordpressUrl from "../../data/WordpressUrl";

const Login01 = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    userNiceName: "",
    userEmail: "",
    loggedIn: false,
    loading: false,
    error: ""
  });
  const { username, password } = state;

  const loginData = {
    username: state.username,
    password: state.password
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const loginData = {
  //     username: state.username,123
  //     password: state.password
  //   };

  //   setState({ loading: true }, () => {
  //     Axios.post(`${wordpressUrl}/wp-json/jwt-auth/v1/token`, loginData)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.warn(err.response.data);
  //       });
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${wordpressUrl}/wp-json/jwt-auth/v1/token`, loginData)
      .then((res) => {
        console.log(res.data.token);
        if (undefined !== res.data.token) {
          setState({ error: res.data.message, loading: false });
          return;
        }
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", res.data.nicename);

        setState({
          loading: false,
          token: res.data.token,
          userNiceName: res.data.userNiceName,
          userEmail: res.data.userEmail,
          loggedIn: true
        });
      })
      .catch((err) => {
        setState({ error: err.response.data, loading: false });
        console.warn(err.response);
      });
  };

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <TextField
          id="component-simple"
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <TextField
          id="component-simple"
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        {/* <FormControl>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            id="component-simple"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <Input
            id="component-simple"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormControl> */}

        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Fragment>
  );
};

export default Login01;
