import React from 'react';
import { Form, Input } from 'antd';
const InputText = ({
  inputLabel,
  inputName,
  required,
  inputValue,
  inputPlaceholder,
}) => {
  return (
    <Form.Item
      // name={inputName.toLowerCase()}
      label={inputLabel}
      value={inputValue}
      hasFeedback
      rules={[
        {
          required: required,
          message: `Add a valid ${inputName}`,
        },
      ]}
    >
      <Input defaultValue={inputPlaceholder} />
    </Form.Item>
  );
};

export default InputText;
