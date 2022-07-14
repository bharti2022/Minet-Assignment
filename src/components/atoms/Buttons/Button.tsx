import React from "react";



const Button = ({variant,children,handleClick}) => {
  return <Button  variant={variant} onClick={handleClick}>{children}</Button>;
};

export default Button;
