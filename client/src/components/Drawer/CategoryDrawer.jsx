import React from 'react';
import { Drawer, Form, Button, Col, Row } from 'antd';

import InputText from './components/InputText.jsx';

const CategoryDrawer = ({
  visibility,
  onClose,
  entityType,
  entityId = null,
  entityName = null,
}) => {
  console.log(entityType);
  return (
    <Drawer
      title={
        entityName
          ? `Edit ${entityType.substring(0, entityType.length - 1)}: ${
              entityName[0].toUpperCase() + entityName.slice(1)
            }`
          : `Add new ${entityType}`
      }
      width={720}
      onClose={onClose}
      visible={visibility}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </div>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <InputText
              required={true}
              inputName={entityName || 'Title'}
              inputLabel={'Title'}
              // inputValue={entityName || 'Title'}
            />
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default CategoryDrawer;
