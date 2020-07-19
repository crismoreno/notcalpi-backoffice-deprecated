import React from 'react';
import { Form, Input } from 'antd';
const InputText = ({ inputLabel, inputName, required, inputValue }) => {
  return (
    <Form.Item
      name={inputName.toLowerCase()}
      label={inputLabel}
      value={inputValue}
      hasFeedback
      rules={[
        {
          required: { required },
          message: `${inputName}`,
        },
      ]}
    >
      <Input placeholder={`${inputName}`} />
    </Form.Item>
  );
};

export default InputText;
