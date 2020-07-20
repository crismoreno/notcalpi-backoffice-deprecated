import React from 'react';
import { Drawer, Form, Button, Col, Row } from 'antd';

import InputText from './components/InputText.jsx';
import InputNum from './components/InputNum.jsx';

const CategoryDrawer = ({
  visibility,
  onClose,
  entityType,
  entityFullName = null,
  priority = null,
  entityId = null,
  entityName = null,
}) => {
  const TagForm = () => {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <InputText
            required={true}
            inputName={entityName || `title`}
            inputLabel={'Title'}
          />
        </Col>
      </Row>
    );
  };
  const CodingLangForm = () => {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <InputText
            required={true}
            inputName={entityName || `Title`}
            inputLabel={'Title'}
          />
        </Col>
        <Col span={12}>
          <InputNum
            required={true}
            inputName={priority || `Priority`}
            inputLabel={`Priority`}
          />
        </Col>
      </Row>
    );
  };
  const MadeAtForm = () => {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <InputText
            required={true}
            inputName={entityName || `Short name`}
            inputLabel={'Short Name'}
          />
        </Col>
        <Col span={12}>
          <InputText
            required={true}
            inputName={entityFullName || `Full name`}
            inputLabel={'Full Name'}
          />
        </Col>
      </Row>
    );
  };

  const SelectFormType = () => {
    switch (entityType) {
      case 'tag':
        return <TagForm />;
        break;
      case 'codingLang':
        return <CodingLangForm />;
        break;
      case 'madeAt':
        return <MadeAtForm />;
        break;
    }
  };

  return (
    <Drawer
      title={
        entityName
          ? `Edit ${entityType}: ${
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
        {SelectFormType}
      </Form>
    </Drawer>
  );
};

export default CategoryDrawer;
