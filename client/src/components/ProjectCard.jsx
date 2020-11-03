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
  onClickEdit,
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
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = require('../assets/img/fallback-img.png');
          }}
          alt="example"
          src={`https://res.cloudinary.com/hyavxktsb/image/upload/projects/${id}/cover.png`}
        />
      }
      actions={[
        <EditOutlined key="edit" onClick={onClickEdit} />,
        <a
          target="_blank"
          href={`https://www.cristinamoreno.dev/#/project/${id}`}
        >
          {show === true ? (
            <EyeOutlined key="see" />
          ) : (
            <EyeInvisibleOutlined key="see" />
          )}
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
      <p>
        {show === true ? (
          <EyeOutlined style={{ marginRight: '20px' }} />
        ) : (
          <EyeInvisibleOutlined style={{ marginRight: '20px' }} />
        )}
        {id}
      </p>
      <Meta
        avatar={
          is_featured === true ? (
            <FlagOutlined style={{ color: '#FF1844' }} />
          ) : null
        }
        title={title}
        // title={is_featured ? <FlagOutlined /> : <FolderOutlined />}
        description={customer}
      />
    </Card>
  );
};
