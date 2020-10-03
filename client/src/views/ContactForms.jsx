import React, { useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import moment from 'moment';

import fetchContactForms from '../helpers/GET/getContactForms';
import { updateContactForm } from '../helpers/UPDATE/updateContactForm';
import deleteContactForm from '../helpers/DELETE/deleteContactForm';
import { connect } from 'react-redux';

import { getContactForms } from '../reducers/index';

import { ContactsTable } from '../components/ContactsTable.jsx';

import { PageHeader, Modal, Button, message } from 'antd';
const { info } = Modal;

import { green } from '@ant-design/colors';

import {
  FrownOutlined,
  SmileOutlined,
  MessageOutlined,
  EditOutlined,
  LikeOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const ContactForms = ({
  contactForms,
  updateContactFormDispatcher,
  fetchContactFormsDispacher,
  deleteContactFormDispacher,
}) => {
  useEffect(() => {
    if (!Array.isArray(contactForms) || !Boolean(contactForms.length)) {
      fetchContactFormsDispacher();
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
    const contactId = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.id;
    const contactMessage = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.message;
    const contactName = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.name;
    const contactEmail = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.email;
    const contactTel = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.tel;
    const contactCompany = contactForms.find(
      (contact) => contactFormId === contact.id
    )?.company;

    info({
      title: `${contactId}`,
      content: (
        <>
          <div>
            <b>Name:</b>
            <p>{contactName}</p>
          </div>
          <div>
            <b>Telephone number:</b>
            <p>{contactTel}</p>
          </div>
          <div>
            <b>Email:</b>
            <p>{contactEmail}</p>
          </div>
          <div>
            <b>Company:</b>
            <p>{contactCompany}</p>
          </div>
          <div>
            <b>Message:</b>
            <p>{contactMessage}</p>
          </div>
        </>
      ),
      onOk() {},
    });
  };

  const toggleState = (e, contactFormId) => {
    const newState = { state: e.target.innerHTML == 'Answered' ? 0 : 1 };
    updateContactFormDispatcher(newState, contactFormId);
  };

  const deleteMessage = (contactFormId) => {
    deleteContactFormDispacher(contactFormId);
  };

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    // {
    //   title: 'Email',
    //   dataIndex: 'email',
    //   key: 'email',
    // },
    // {
    //   title: 'TelNum',
    //   dataIndex: 'tel',
    //   key: 'tel',
    // },
    // {
    //   title: 'Company',
    //   dataIndex: 'company',
    //   key: 'company',
    // },
    {
      title: 'Timestamp',
      dataIndex: 'createdAt',
      key: 'createdAt',
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        if (record.state == false) {
          return (
            <Button
              type="primary"
              danger
              icon={<FrownOutlined />}
              onClick={(e) => {
                toggleState(e, record.id);
              }}
            >
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
              onClick={(e) => {
                toggleState(e, record.id);
              }}
            >
              Answered
            </Button>
          );
        }
      },
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
    {
      title: 'Delete',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            deleteMessage(record.id);
          }}
        >
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        className="contact-forms-page-header"
        title="Messages"
        // subTitle="This is a subtitle"
      />
      <ContactsTable data={contactForms} columns={columns} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContactFormsDispacher: () => dispatch(fetchContactForms()),
  deleteContactFormDispacher: (idToDelete) =>
    dispatch(deleteContactForm(idToDelete)),
  updateContactFormDispatcher: (values, idToUpdate) =>
    dispatch(
      updateContactForm(values, idToUpdate, (err, result) => {
        if (result) {
          message.success(
            `ContactForm ${idToUpdate} was updated successfully!`
          );
        } else {
          console.log(err, 'err');
        }
      })
    ),
});

const mapStateToProps = (state) => ({
  contactForms: getContactForms(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForms);
