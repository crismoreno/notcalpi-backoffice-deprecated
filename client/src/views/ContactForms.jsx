import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import moment from 'moment';

import fetchContactForms from '../helpers/GET/getContactForms';
import { connect } from 'react-redux';

import { getContactForms } from '../reducers/index';

import { ContactsTable } from '../components/ContactsTable.jsx';

import { PageHeader, Modal, Button } from 'antd';
const { info } = Modal;

import { green } from '@ant-design/colors';

import {
  FrownOutlined,
  SmileOutlined,
  MessageOutlined,
  EditOutlined,
  LikeOutlined,
} from '@ant-design/icons';

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
    for (let i = 0; i < contactForms.length; i++) {
      contactForms[i].key = i;
    }
  }

  const modal = (contactFormId) => {
    const modalMessage = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.message;
    const modalTitle = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.name;

    info({
      title: `Message from: ${modalTitle}`,
      content: (
        <div>
          <p>{modalMessage}</p>
        </div>
      ),
      onOk() {},
    });
  };

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
      render: (text, record) => {
        if (record.state == false) {
          return (
            <Button type="primary" danger icon={<FrownOutlined />}>
              Unanswered
            </Button>
          );
        } else {
          return (
            <Button
              style={{
                background: green.primary,
                borderColor: green.primary,
                color: 'white',
              }}
              icon={<SmileOutlined />}
            >
              Answered
            </Button>
          );
        }
      },
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
      key: 'show',
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => {
            modal(record.id);
          }}
        >
          <MessageOutlined /> Show message
        </Button>
      ),
    },
    {
      title: 'Timestamp',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Answer',
      dataIndex: 'createdAt',
      key: 'answer',
      render: (text, record) => {
        if (record.state == false) {
          return (
            <Button type="primary" danger href={`mailto:${record.email}`}>
              <EditOutlined /> Answer
            </Button>
          );
        } else {
          return (
            <Button
              style={{
                background: green.primary,
                borderColor: green.primary,
                color: 'white',
              }}
              icon={<LikeOutlined />}
              disabled
            ></Button>
          );
        }
      },
    },
  ];

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
