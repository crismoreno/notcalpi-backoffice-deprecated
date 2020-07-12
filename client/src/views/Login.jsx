import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';

import { getAuth } from '../reducers/index';

import { loginUser } from '../helpers/login';

const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
};

const Login = ({ dispatch }) => {
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    if (localStorage.hasOwnProperty('user')) {
      setIsRedirect(true);
    }
  });

  const onFinish = (values) => {
    dispatch(
      loginUser(values, (err, result) => {
        if (result) {
          setIsRedirect(true);
        }
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (isRedirect) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="login-form-container">
      <div className="login-form">
        <img
          style={{
            height: '30px',
            margin: '30px auto 30px auto',
          }}
          src={require('../assets/img/notcalpi.png')}
        />
        <Form
          // {...layout}
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
});

export default connect(mapStateToProps)(Login);
