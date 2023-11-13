//props.threshold     : threshold for scroll event to call function. default: 100

import React from "react";
import { useScrollTrigger, Slide } from "@material-ui/core";

export default function ScrollToSlide01(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}
