import React from 'react';
import { Form, Switch } from 'antd';
const InputSwitch = ({ inputName, required, checked }) => {
  const Switcher = () => {
    return checked === true ? (
      <Switch placeholder={`${inputName}`} defaultChecked />
    ) : (
      <Switch placeholder={`${inputName}`} />
    );
  };
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
      <Switcher />
    </Form.Item>
  );
};

export default InputSwitch;
