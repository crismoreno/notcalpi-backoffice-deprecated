import React, { useEffect } from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

export const ProjectCard = ({ project }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={`https://res.cloudinary.com/hyavxktsb/image/upload/projects/${project.id}/cover.png`}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https:zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={project.title}
        description={project.customer}
      />
    </Card>
  );
};
