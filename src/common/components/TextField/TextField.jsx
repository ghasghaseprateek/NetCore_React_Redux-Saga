import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MuiTextField from "@material-ui/core/TextField";

const onBlur = (event, props) => {
  event.persist();
  typeof props.onBlur !== "undefined" && props.onBlur(event);
};

const onChange = (event, props) => {
  event.persist();
  props.onChange(event);
};

const TextField = (props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <MuiTextField
      id={props.name}
      name={props.name}
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      required={props.isRequired}
      className={props.className}
      disabled={props.disabled}
      value={value}
      error={!props.isValid}
      onBlur={(e) => onBlur(e, props)}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e, props);
      }}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "number", "email"]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isValid: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  disabled: false,
  isValid: true,
  isRequired: false,
  className: "",
};

export default TextField;
