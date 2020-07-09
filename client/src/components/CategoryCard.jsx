import React from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const CategoryCard = ({ tag }) => {
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
    >
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={<Avatar src={require('../assets/img/cristina.png')} />}
          title={`${tag.name}`}
          description={`ID: ${tag.id}`}
        />
      </Skeleton>
    </Card>
  );
};
