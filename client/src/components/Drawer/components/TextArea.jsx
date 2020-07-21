import React from 'react';
import { Form, Input } from 'antd';

const TextArea = ({ inputName, required }) => {
  return (
    <Form.Item
      name={`${inputName.toLowerCase()}`}
      label={`${inputName}`}
      hasFeedback
      rules={[
        {
          required: required,
          message: `${inputName}`,
        },
      ]}
    >
      <Input.TextArea rows={4} placeholder={`${inputName}`} />
    </Form.Item>
  );
};

export default TextArea;
