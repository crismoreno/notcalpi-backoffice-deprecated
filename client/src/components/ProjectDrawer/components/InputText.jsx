import React from 'react';
import { Form, Input } from 'antd';
const InputText = ({ inputName, required }) => {
  return (
    <Form.Item
      name={inputName.toLowerCase()}
      label={inputName}
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
