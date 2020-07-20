import React from 'react';
import { Card, Modal, Popconfirm, message } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  LinkOutlined,
  EyeOutlined,
} from '@ant-design/icons';
const { Meta } = Card;

import deleteTag from '../helpers/DELETE/deleteTags';
import deleteCodingLang from '../helpers/DELETE/deleteCodingLangs';
import deleteMadeAt from '../helpers/DELETE/deleteMadeAts';

export const CategoryCard = ({ entity, entityType, dispatch, onClickEdit }) => {
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

  const handleCancelDelete = () => {
    message.success('You cancelled the deletion of the entity successfully');
  };

  const handleConfirmDelete = ({ id, name }) => {
    switch (entityType) {
      case 'tag':
        dispatch(deleteTag(id));
        break;
      case 'codingLang':
        dispatch(deleteCodingLang(id));
        break;
      case 'madeAt':
        dispatch(deleteMadeAt(id));
        break;
      case 'default':
        return null;
    }
    message.success(`You deleted ${name} successfully`);
  };

  const linkToPreview = () => {
    if (entityType === 'madeAt') {
      entityType = 'place';
    }
    const url = `https://www.cristinamoreno.dev/#/portfolio?${entityType}=${entity.id}`;
    return url;
  };

  const noProjectsCard = () => {
    return (
      <Card
        style={{ width: '20%', margin: '5px' }}
        title={`${name}`}
        actions={[
          <EditOutlined key="edit" onClick={onClickEdit} />,
          <Popconfirm
            title={` Are you sure about deleting ${name}?`}
            onConfirm={() => {
              handleConfirmDelete(entity);
            }}
            onCancel={handleCancelDelete}
            okText="Delete"
            cancelText="Cancel"
          >
            <DeleteOutlined key="delete" />
          </Popconfirm>,
        ]}
      >
        <Meta title={`catId: ${entity.id}`} description={'0 projects'} />
      </Card>
    );
  };

  const cardWithProjects = () => {
    return (
      <Card
        style={{ width: '20%', margin: '5px' }}
        title={`${name}`}
        actions={[
          <EditOutlined key="edit" onClick={onClickEdit} />,
          <a
            target="_blank"
            href={
              entityType === 'madeAt'
                ? `https://www.cristinamoreno.dev/#/portfolio?place=${entity.id}`
                : `https://www.cristinamoreno.dev/#/portfolio?${entityType}=${entity.id}`
            }
          >
            <EyeOutlined key="see" />,
          </a>,
          <LinkOutlined key="see" onClick={warningProjects} />,
        ]}
      >
        <Meta
          title={`catId: ${entity.id}`}
          description={
            arrProjectsUsingTag ? (
              <li>{`${arrProjectsUsingTag.length} projects`}</li>
            ) : (
              <li>0 Projects</li>
            )
          }
        />
      </Card>
    );
  };

  {
    return arrProjectsUsingTag == null ? noProjectsCard() : cardWithProjects();
  }
};
