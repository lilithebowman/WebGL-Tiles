import React from "react";
import PropTypes from "prop-types";
import { Zoom, useScrollTrigger, makeStyles, Fab } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    zIndex: "100",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ScrollToTop01 = props => {
  const classes = useStyles();
  // const trigger = useScrollTrigger();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 120,
    target: props.window ? window() : undefined
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </div>
    </Zoom>
  );
};

ScrollToTop01.propTypes = {
  children: PropTypes.element.isRequired
};

export default ScrollToTop01;
