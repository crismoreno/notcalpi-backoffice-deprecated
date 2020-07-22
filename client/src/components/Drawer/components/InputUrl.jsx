import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
// const selectAfter = (
//   <Select defaultValue=".com" className="select-after">
//     <Option value=".com">.com</Option>
//     <Option value=".es">.es</Option>
//   </Select>
// );

const InputUrl = ({ inputName, required, inputPlaceholder }) => {
  return (
    <Form.Item
      // name={inputName.toLowerCase()}
      label={inputName}
      hasFeedback
      rules={[{ required: required, message: `${inputName}` }]}
    >
      <Input
        style={{ width: '100%' }}
        addonBefore={selectBefore}
        // addonAfter={selectAfter}
        defaultValue={inputPlaceholder}
      />
    </Form.Item>
  );
};
export default InputUrl;
