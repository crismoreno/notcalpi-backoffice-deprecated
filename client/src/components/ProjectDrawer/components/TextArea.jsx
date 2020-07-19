import React from 'react';
import { Form, Input } from 'antd';

const TextArea = ({ inputName }) => {
  return (
    <Form.Item
      name={`${inputName.toLowerCase()}`}
      label={`${inputName}`}
      hasFeedback
      rules={[
        {
          required: true,
          message: `${inputName}`,
        },
      ]}
    >
      <Input.TextArea rows={4} placeholder={`${inputName}`} />
    </Form.Item>
  );
};

export default TextArea;
