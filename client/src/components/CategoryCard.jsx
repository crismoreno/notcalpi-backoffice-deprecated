import React from 'react';
import { Card, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';

// const { Meta } = Card;

export const CategoryCard = ({ entity }) => {
  let name = entity.name || entity.short_name;
  name = name.charAt(0).toUpperCase() + name.slice(1);

  let arrProjectsUsingTag =
    entity.projects != null
      ? (arrProjectsUsingTag = entity.projects.split(','))
      : null;

  const modalContent = (
    <ul>
      {arrProjectsUsingTag != null ? (
        arrProjectsUsingTag.map((element, index) => (
          <li key={index}>{element}</li>
        ))
      ) : (
        <li>0 Projects</li>
      )}
    </ul>
  );

  const warningProjects = () => {
    Modal.warning({
      title: <p>{`${name}`}</p>,
      content: modalContent,
    });
  };

  const noProjectsCard = () => {
    return (
      <Card
        style={{ width: '20%', margin: '5px' }}
        title={`${name}`}
        actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
      >
        <ul>
          <li>{`catId: ${entity.id}`}</li>
          <li>0 Projects</li>
        </ul>
      </Card>
    );
  };

  const cardWithProjects = () => {
    return (
      <Card
        style={{ width: '20%', margin: '5px' }}
        title={`${name}`}
        actions={[
          <EditOutlined key="edit" />,
          <LinkOutlined key="see" onClick={warningProjects} />,
        ]}
      >
        <ul>
          <li>{`catId: ${entity.id}`}</li>
          {arrProjectsUsingTag ? (
            <li>{`${arrProjectsUsingTag.length} projects`}</li>
          ) : (
            <li>0 Projects</li>
          )}
        </ul>
      </Card>
    );
  };

  {
    return arrProjectsUsingTag == null ? noProjectsCard() : cardWithProjects();
  }
};
