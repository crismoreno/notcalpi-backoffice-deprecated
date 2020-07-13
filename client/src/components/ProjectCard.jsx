import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Avatar, Popconfirm, message } from 'antd';

import deleteProject from '../helpers/deleteProject';

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const ProjectCard = ({
  dispatch,
  project,
  project: { id, title, customer, show },
}) => {
  const handleCancelDelete = () => {
    message.success('You cancelled the deletion of the project successfully');
  };
  const handleConfirmDelete = ({ id, title }) => {
    dispatch(deleteProject(id));
    message.success(`You deleted ${title} successfully`);
  };
  return (
    <Card
      style={{ width: 300 }}
      className="notcalpi-card"
      cover={
        <img
          alt="example"
          src={`https://res.cloudinary.com/hyavxktsb/image/upload/projects/${id}/cover.png`}
        />
      }
      actions={[
        <EditOutlined key="edit" />,
        <Popconfirm
          title={` Are you sure about deleting ${title}?`}
          onConfirm={() => {
            handleConfirmDelete(project);
          }}
          onCancel={handleCancelDelete}
          okText="Delete"
          cancelText="Cancel"
        >
          <DeleteOutlined key="delete" />
        </Popconfirm>,
      ]}
    >
      <Meta
        avatar={show === true ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        title={title}
        description={customer}
      />
    </Card>
  );
};
