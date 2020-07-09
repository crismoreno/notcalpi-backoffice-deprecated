import React from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const CategoryCard = ({ entity }) => {
  let name = entity.name || entity.short_name;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
    >
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={<Avatar src={require('../assets/img/cristina.png')} />}
          title={`${name}`}
          description={`ID: ${entity.id}`}
        />
      </Skeleton>
    </Card>
  );
};
