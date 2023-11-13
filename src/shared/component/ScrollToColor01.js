//props.threshold     : threshold for scroll event to call function. default: 100
//props.bgColorBefore       : bgColor before scroll. default "transparent"
//props.bgColorAfter       : bgColor after scroll. default "#343a40"
//props.textColorBefore     : textColor before scroll. default "black"
//props.textColorAfter     : textColor after scroll. default "black"
//props.fadeIn           : fadeIn transition time. default "0.3s"
//props.fadeOut         : fadeOut transition time. default "0.3s"
//props.paddingBefore   : top & bottom padding before scroll
//props.paddingAfter   : top & bottom padding after scroll

import React from "react";
import { useScrollTrigger } from "@material-ui/core";

export default function ScrollToColor01(props) {
  const {
    threshold,
    bgColorBefore,
    bgColorAfter,
    textColorBefore,
    textColorAfter,
    fadeIn,
    fadeOut,
    paddingBefore,
    paddingAfter,
    children,
    ...other
  } = {
    threshold: 0,
    bgColorBefore: "transparent",
    bgColorAfter: "#343a40",
    textColorBefore: "black",
    textColorAfter: "white",
    fadeIn: "0.3s",
    fadeOut: "0.3s",
    paddingBefore: "1.563rem",
    paddingAfter: "15px",
    ...props
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(children, {
    style: {
      boxShadow: "none",
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut
    },
    ...other
  });
}
