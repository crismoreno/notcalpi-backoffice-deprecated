import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import moment from 'moment';

import fetchUsers from '../helpers/getUsers';
import { connect } from 'react-redux';

import { getUsers } from '../reducers/index';

import { ContactsTable } from '../components/ContactsTable.jsx';

import { PageHeader, Button } from 'antd';

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

const Users = ({ dispatch, users }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(users) || !Boolean(users.length)) {
      dispatch(fetchUsers());
    }
  }, [users]);

  if (Array.isArray(users)) {
    users.map((i) => {
      i.createdAt = moment(i.createdAt).utc().format('DD.MM.YYYY');
    });
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <PageHeader
          className="contact-forms-page-header"
          title="Users with access"
          // subTitle="This is a subtitle"
        />
        <Button type="primary" style={{ marginTop: '15px' }}>
          Add new user
        </Button>
      </div>
      <ContactsTable data={users} columns={columns} />
    </>
  );
};

const mapStateToProps = (state) => ({
  users: getUsers(state),
});

export default connect(mapStateToProps)(Users);
