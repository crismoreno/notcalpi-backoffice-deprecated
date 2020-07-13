import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Avatar, Popconfirm, message } from 'antd';

const { Meta } = Card;

export const ProjectCard = ({ project, project: { id, title, customer } }) => {
  const handleCancelDelete = () => {
    message.success('You cancelled the deletion of the project successfully');
  };
  const handleConfirmDelete = ({ id, title }) => {
    console.log(`project deleted id: ${id}`);
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
          title="Are you sure about deleting this project?"
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
        avatar={<Avatar src={require('../assets/img/cristina.png')} />}
        title={title}
        description={customer}
      />
    </Card>
  );
};
