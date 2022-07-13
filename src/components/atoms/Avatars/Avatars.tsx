import React from "react";
import { Avatar } from "@material-ui/core";

const Avatars = ({iconSrc, color}:{iconSrc:string, color:string}) => {
  return <Avatar alt="icon" src={iconSrc} />;
};

export default Avatars;
