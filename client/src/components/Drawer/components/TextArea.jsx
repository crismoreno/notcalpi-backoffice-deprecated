import React from 'react';
import { Form, Input } from 'antd';

const TextArea = ({ inputName, required, inputPlaceholder }) => {
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
      <Input.TextArea rows={4} placeholder={inputPlaceholder} />
    </Form.Item>
  );
};

export default TextArea;
