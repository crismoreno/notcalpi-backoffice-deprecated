import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import moment from 'moment';

import fetchContactForms from '../helpers/GET/getContactForms';
import { connect } from 'react-redux';

import { getContactForms } from '../reducers/index';

import { ContactsTable } from '../components/ContactsTable.jsx';

import { PageHeader, Space, Tag } from 'antd';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: () => <Tag color="volcano">Unanswered</Tag>,
    // render: tags => (
    //   <>
    //     {tags.map(tag => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'TelNum',
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
  },
  {
    title: 'Timestamp',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Answer',
    dataIndex: 'createdAt',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href={`mailto:${record.email}`}>Answer Contact Form</a>
      </Space>
    ),
  },
];

const ContactForms = ({ dispatch, contactForms }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(contactForms) || !Boolean(contactForms.length)) {
      dispatch(fetchContactForms());
    }
  }, [contactForms]);

  if (Array.isArray(contactForms)) {
    contactForms.map((i) => {
      i.createdAt = moment(i.createdAt).utc().format('DD.MM.YYYY');
    });
  }

  return (
    <>
      <PageHeader
        className="contact-forms-page-header"
        title="Contact Froms"
        // subTitle="This is a subtitle"
      />
      <ContactsTable data={contactForms} columns={columns} />
    </>
  );
};

const mapStateToProps = (state) => ({
  contactForms: getContactForms(state),
});

export default connect(mapStateToProps)(ContactForms);
