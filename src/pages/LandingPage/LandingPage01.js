/*
 * Import remote dependancies
 */
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import CustomHero01 from "../../shared/component/CustomHero01";
import {
  Box,
  Button,
  Typography,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  makeStyles,
  CircularProgress
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import wordpressUrl from "../../data/WordpressUrl";

// CHANGE THIS TO YOUR WORDPRESS SITE URL.
// const wordpressUrl = "https://calderaforms.com";
// const baseUrl = "https://jameslaiproductions.tk";

const useStyles = makeStyles((theme) => ({
  card: {},
  cardHeader: {
    background: "lightblue"
  },
  cardContent: {},
  cardActions: {
    background: "lightgreen"
  },
  button: {},
  pagination: {
    textAlign: "center"
  },
  progress: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto"
  }
}));

const LandingPage01 = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <CustomHero01
        // overlayOpacity="1"
        // overlayColor="black"
        minHeight="30vh"
        backgroundImage="https://scontent.fbki2-1.fna.fbcdn.net/v/t31.0-8/22051380_10209888107787589_3822251984545509115_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=_T_HQlZ9Q0UAX8OYz-U&_nc_ht=scontent.fbki2-1.fna&oh=9c93a9c1a4175bd378fd487c984ea2d8&oe=5F3ED485"
      />
    </Fragment>
  );
};

export default LandingPage01;
