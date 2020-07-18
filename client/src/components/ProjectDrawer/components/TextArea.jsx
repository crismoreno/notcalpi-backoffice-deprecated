import React from 'react';
import { Form, Input } from 'antd';

const TextArea = () => {
  return (
    <Form.Item
      name="description"
      label="Description"
      rules={[
        {
          required: true,
          message: 'please enter url description',
        },
      ]}
    >
      <Input.TextArea rows={4} placeholder="please enter url description" />
    </Form.Item>
  );
};

export default TextArea;
