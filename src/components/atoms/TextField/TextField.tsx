/* eslint-disable react/jsx-no-undef */
import React from "react";
import { InputAdornment, TextField } from "@mui/material";

const TextField = ({
  placeholder,
  handleChange,
  iconPosition,
  Icon,
  variant,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      variant={variant}
      onChange={() => {
        handleChange();
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position={iconPosition}>
            <Icon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};

export default TextField;
