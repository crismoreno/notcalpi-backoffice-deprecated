import React from 'react';
import { Form, Select } from 'antd';

const Selector = ({ selectorType, options, required }) => {
  return (
    <Form.Item
      name={selectorType.toLowerCase()}
      label={selectorType}
      rules={[
        {
          required: required,
          message: `Please select ${selectorType.toLowerCase()}`,
        },
      ]}
    >
      <Select placeholder={`Please select ${selectorType.toLowerCase()}`}>
        {options.map((option, index) => (
          <Option value={option} key={index}>
            {option}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default Selector;
