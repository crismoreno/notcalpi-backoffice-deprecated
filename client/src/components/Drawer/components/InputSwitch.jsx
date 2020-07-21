import React from 'react';
import { Form, Switch } from 'antd';
const InputSwitch = ({ inputName, required }) => {
  return (
    <Form.Item
      name={inputName.toLowerCase()}
      label={inputName}
      valuePropName="checked"
      hasFeedback
      rules={[
        {
          required: required,
          message: `${inputName}`,
        },
      ]}
    >
      <Switch placeholder={`${inputName}`} />
    </Form.Item>
  );
};

export default InputSwitch;
