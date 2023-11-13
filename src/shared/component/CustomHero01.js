import React from "react";

export default function CustomHero01(props) {
  const {
    minHeight,
    backgroundImage,
    backgroundAttachment,
    overlayColor,
    overlayOpacity,
    alignXContent,
    alignYContent,
    contentPadding,
    children
  } = {
    minHeight: "20vh",
    backgroundImage: "",
    backgroundAttachment: "fixed", //additional properties: "fixed" parallax effect || "scroll" default
    overlayColor: "#0078ff",
    overlayOpacity: "0.5",
    alignXContent: "center", //additional properties: flex-start, center, flex-end
    alignYContent: "center", //additional properties: flex-start, center, flex-end
    contentPadding: "20px",
    ...props
  };

  return (
    <div //background Image
      style={{
        backgroundImage: `url(` + backgroundImage + `)`,
        backgroundAttachment: backgroundAttachment,
        minHeight: minHeight,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative" //"sticky" || "relative" works
      }}
    >
      <div //Overlay
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
          position: "absolute",
          flex: "auto",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "2"
        }}
      />
      <div //Content
        style={{
          minHeight: minHeight,
          padding: contentPadding,
          justifyContent: alignXContent,
          alignItems: alignYContent,
          display: "flex",
          flex: "auto",
          zIndex: "12",
          position: "relative" //"sticky" || "relative" works
        }}
      >
        {children}
      </div>
    </div>
  );
}
