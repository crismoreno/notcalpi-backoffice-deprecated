import React, { useEffect } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

export const ProjectCard = ({ project }) => {
  return (
    <Card
      style={{ width: 300 }}
      className="notcalpi-card"
      cover={
        <img
          alt="example"
          src={`https://res.cloudinary.com/hyavxktsb/image/upload/projects/${project.id}/cover.png`}
        />
      }
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
    >
      <Meta
        avatar={<Avatar src={require('../assets/img/cristina.png')} />}
        title={project.title}
        description={project.customer}
      />
    </Card>
  );
};
