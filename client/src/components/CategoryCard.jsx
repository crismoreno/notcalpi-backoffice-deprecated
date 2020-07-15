import React from 'react';
import { Card, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const CategoryCard = ({ entity }) => {
  let name = entity.name || entity.short_name;
  name = name.charAt(0).toUpperCase() + name.slice(1);

  const arrProjectsUsingTag = entity.projects.split(',');

  const warningProjects = () => {
    Modal.warning({
      title: <p>{`${name}`}</p>,
      content: (
        <ul>
          {arrProjectsUsingTag.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      ),
    });
  };

  return (
    <Card
      style={{ width: '20%', margin: '5px' }}
      title={`${name}`}
      actions={[
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
        <LinkOutlined key="see" onClick={warningProjects} />,
      ]}
    >
      <ul>
        <li>{`catId: ${entity.id}`}</li>
        <li>{`${arrProjectsUsingTag.length} projects`}</li>
      </ul>
    </Card>
  );
};
