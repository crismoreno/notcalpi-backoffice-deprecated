import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import moment from 'moment';

import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import fetchUsers from '../helpers/GET/getUsers';
import { createUser } from '../helpers/CREATE/createUser';
import { connect } from 'react-redux';

import { getUsers } from '../reducers/index';

import { ContactsTable } from '../components/ContactsTable.jsx';

import { PageHeader, Button, Modal, Form, Input, message } from 'antd';
const { Item } = Form;

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Hash',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Creation Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];

const Users = ({ fetchUsersDispatcher, users, createUserDispatcher }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(users) || !Boolean(users.length)) {
      fetchUsersDispatcher();
    }
  }, [users]);

  if (Array.isArray(users)) {
    users.map((i) => {
      i.createdAt = moment(i.createdAt).utc().format('DD.MM.YYYY');
    });
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    createUserDispatcher(values, setIsModalVisible(false));
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <PageHeader
          className="contact-forms-page-header"
          title="Users with access"
          // subTitle="This is a subtitle"
        />
        <Button
          type="primary"
          style={{ marginTop: '15px' }}
          onClick={() => setIsModalVisible(true)}
        >
          Add new user
        </Button>
      </div>
      <ContactsTable data={users} columns={columns} />
      <Modal
        title="Add admin user"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button onClick={() => setIsModalVisible(false)}>Cancel</Button>,
        ]}
      >
        <Form
          name="register_user_form"
          className="register_user_form"
          onFinish={onFinish}
        >
          <Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Item>
          <Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
            />
          </Item>
          <Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Item>
          <Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: '100%' }}
            >
              Log in
            </Button>
          </Item>
        </Form>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsersDispatcher: () => dispatch(fetchUsers()),
  createUserDispatcher: (values, onFinish) =>
    dispatch(
      createUser(values, (err, result) => {
        if (result) {
          message.success(`User ${values.username} created successfully!`);
        } else {
          console.log(err, 'err');
        }
      })
    ),
});

const mapStateToProps = (state) => ({
  users: getUsers(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
