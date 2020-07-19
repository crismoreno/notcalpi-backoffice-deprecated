import React from 'react';
import { Drawer, Form, Button, Col, Row } from 'antd';

import InputText from './components/InputText.jsx';

const CategoryDrawer = ({ visibility, onClose, entity }) => {
  return (
    <Drawer
      title={`Add new ${entity.substring(0, entity.length - 1)}`}
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
            <InputText required={true} inputName={'Title'} />
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default CategoryDrawer;
