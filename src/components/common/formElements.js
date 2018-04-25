import React from 'react';
import {
  TextField,
  SelectField,
  Checkbox,
  DatePicker,
  SelectionControlGroup
} from 'react-md';

const FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export const renderTextField = field => {
  const { input, meta: { touched, error }, ...others } = field;
  return (
    <TextField
      {...input}
      {...others}
      error={touched && !!error}
      errorText={error}
    />
  );
};

export const renderSelectField = field => {
  const { input, meta: { touched, error }, value, ...others } = field;

  return (
    <SelectField
      {...input}
      {...others}
      error={touched && !!error}
      errorText={error}
      className="md-select-full-width"
    />
  );
};

export const renderCheckBox = field => {
  const { input, ...others } = field;

  return <Checkbox {...input} {...others} />;
};

export const renderRadioButton = field => {
  const { input, ...others } = field;

  return <SelectionControlGroup {...input} {...others} />;
};

export const renderDatePicker = field => {
  const { input, meta: { touched, error }, ...others } = field;

  return (
    <DatePicker
      {...input}
      {...others}
      error={touched && !!error}
      errorText={error}
      formatOptions={FORMAT_OPTIONS}
    />
  );
};
