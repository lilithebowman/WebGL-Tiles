import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Paper,
  Grid,
  Button,
  Avatar
} from "@material-ui/core";
import CustomHero01 from "./component/CustomHero01";
import SocialMedia from "../data/SocialMedia";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px"
  },
  flex: {
    textAlign: "center"
  },
  typography: {
    color: "white"
  }
}));

const Footer01 = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CustomHero01
        overlayOpacity="1"
        overlayColor="black"
        minHeight=""
        className={classes.container}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.flex}>
            {SocialMedia.map((x) => (
              <Button href={x.url}>
                <Avatar src={x.icon} />
              </Button>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography
              align="center"
              display="block"
              variant="caption"
              color="textSecondary"
              className={classes.typography}
            >
              © 2020 Copyright by #JamesLaiProductions
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="center"
              display="block"
              variant="caption"
              color="textSecondary"
              className={classes.typography}
            >
              Designed by #JamesLaiProductions
            </Typography>
          </Grid>
        </Grid>
      </CustomHero01>
    </div>
  );
};

export default Footer01;
