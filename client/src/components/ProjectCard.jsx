import React from 'react';
import { Card, Popconfirm, message } from 'antd';

import deleteProject from '../helpers/DELETE/deleteProject';

import {
  EyeInvisibleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FlagOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export const ProjectCard = ({
  dispatch,
  project,
  project: { id, title, customer, show, is_featured },
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
      // title={is_featured ? <FlagOutlined /> : <FolderOutlined />}
      cover={
        <img
          alt="example"
          src={`https://res.cloudinary.com/hyavxktsb/image/upload/projects/${id}/cover.png`}
        />
      }
      actions={[
        <EditOutlined key="edit" />,
        <a
          target="_blank"
          href={`https://www.cristinamoreno.dev/#/project/${id}`}
        >
          <EyeOutlined key="see" />
        </a>,
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
        // avatar={show === true ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        avatar={show === true ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        title={title}
        // title={is_featured ? <FlagOutlined /> : <FolderOutlined />}
        description={is_featured ? <FlagOutlined /> : customer}
      />
    </Card>
  );
};
