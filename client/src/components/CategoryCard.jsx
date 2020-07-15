import React, { useState } from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const CategoryCard = ({ entity }) => {
  const [activeTab, setActiveTab] = useState({ key: 'CatId' });
  let name = entity.name || entity.short_name;
  name = name.charAt(0).toUpperCase() + name.slice(1);

  const tabList = [
    {
      key: 'CatId',
      tab: 'CatId',
    },
    {
      key: 'Projects',
      tab: 'Projects',
    },
  ];

  const arrProjectsUsingTag = entity.projects.split(',');

  const contentList = {
    CatId: <p>{`id: ${entity.id}`}</p>,
    Projects: (
      <ul>
        {arrProjectsUsingTag.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    ),
  };

  const onTabChange = (key, type) => {
    setActiveTab({ [type]: key });
  };

  return (
    <Card
      style={{ width: '20%', margin: '5px' }}
      title={`${name}`}
      tabList={tabList}
      activeTabKey={activeTab.key}
      onTabChange={(key) => {
        onTabChange(key, 'key');
      }}
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
    >
      {contentList[activeTab.key]}
    </Card>
  );
};
