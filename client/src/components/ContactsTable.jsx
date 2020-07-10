import React from 'react';
import { Table } from 'antd';

export const ContactsTable = ({ data, columns }) => {
  return <Table columns={columns} dataSource={data} />;
};
