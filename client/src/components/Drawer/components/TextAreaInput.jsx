import React from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;
const { Item } = Form;

const TextAreaInput = ({ inputName, required, inputPlaceholder }) => {
  const TextAreaKind = () => {
    if (inputPlaceholder !== 'Description') {
      return <TextArea autoSize defaultValue={inputPlaceholder} />;
    } else {
      return <TextArea rows={4} placeholder={inputPlaceholder} />;
    }
  };

  return (
    <Item
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
      <TextAreaKind />
    </Item>
  );
};

export default TextAreaInput;
