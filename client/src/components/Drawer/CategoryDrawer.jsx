import React, { useRef } from 'react';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  message,
  Input,
  InputNumber,
} from 'antd';

const { Item } = Form;

import { createTag } from '../../helpers/CREATE/createTag';
import { createMadeAt } from '../../helpers/CREATE/createMadeAt';
import { createCodingLang } from '../../helpers/CREATE/createCodingLang';

import { updateTag } from '../../helpers/UPDATE/updateTag';
import { updateMadeAt } from '../../helpers/UPDATE/updateMadeAt';
import { updateCodingLang } from '../../helpers/UPDATE/updateCodingLang';

const CategoryDrawer = ({
  dispatch,
  visibility,
  onClose,
  entityType,
  entityFullName = null,
  priority = null,
  entityId = null,
  entityName = null,
}) => {
  const formRef = useRef(null);
  const TagForm = () => {
    return (
      <>
        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="title"
              label="Title"
              hasFeedback
              rules={[
                {
                  required: entityId !== null ? false : true,
                  message: `Add a valid title`,
                },
              ]}
            >
              <Input placeholder={entityName || `Title`} />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-cat-create-edit-button"
              >
                Submit
              </Button>
            </Item>
          </Col>
        </Row>
      </>
    );
  };
  const CodingLangForm = () => {
    return (
      <>
        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="title"
              label="Title"
              hasFeedback
              rules={[
                {
                  required: entityId !== null ? false : true,
                  message: `Add a valid title`,
                },
              ]}
            >
              <Input placeholder={entityName || `Title`} />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="orderby"
              label="Priority"
              hasFeedback
              rules={[
                {
                  required: entityId !== null ? false : true,
                  message: `Add a valid Priority value`,
                },
              ]}
            >
              <InputNumber placeholder="Priority" style={{ width: '100%' }} />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-cat-create-edit-button"
              >
                Submit
              </Button>
            </Item>
          </Col>
        </Row>
      </>
    );
  };
  const MadeAtForm = () => {
    return (
      <>
        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="shortname"
              label="Short Name"
              hasFeedback
              rules={[
                {
                  required: entityId !== null ? false : true,
                  message: `Add a valid short name`,
                },
              ]}
            >
              <Input placeholder={entityName || `Short Name`} />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="fullname"
              label="FullName"
              hasFeedback
              rules={[
                {
                  required: entityId !== null ? false : true,
                  message: `Add a valid full name`,
                },
              ]}
            >
              <Input placeholder={entityName || `FullName`} />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-cat-create-edit-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </>
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
      case 'default':
        return null;
    }
  };

  const onFinish = (values) => {
    console.log(values);
    //Create Cats
    if (entityId === null) {
      switch (entityType) {
        case 'tag':
          dispatch(
            createTag(values, (err, result) => {
              if (result) {
                message.success(`Tag ${values.title} created successfully!`);
                onClose();
              }
            })
          );
          break;
        case 'codingLang':
          dispatch(
            createCodingLang(values, (err, result) => {
              if (result) {
                message.success(`Tag ${values.title} created successfully!`);
                onClose();
              }
            })
          );
          break;
        case 'madeAt':
          dispatch(
            createMadeAt(values, (err, result) => {
              if (result) {
                message.success(`Tag ${values.fullname} created successfully!`);
                onClose();
              }
            })
          );
          break;
        case 'default':
          return null;
      }
      //Update Cats
    } else {
      switch (entityType) {
        case 'tag':
          dispatch(
            updateTag({ values, entityId }, (err, result) => {
              if (result) {
                message.success(`Tag ${values.title} updated successfully!`);
                onClose();
              }
            })
          );
          break;
        case 'codingLang':
          dispatch(
            updateCodingLang({ values, entityId }, (err, result) => {
              if (result) {
                message.success(`Tag ${values.title} updated successfully!`);
                onClose();
              }
            })
          );
          break;
        case 'madeAt':
          dispatch(
            updateMadeAt({ values, entityId }, (err, result) => {
              if (result) {
                message.success(`Tag ${values.fullname} updated successfully!`);
                onClose();
              }
            })
          );
          break;
        case 'default':
          return null;
      }
    }
    formRef.current.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Drawer
      title={
        entityName
          ? `Edit ${entityType}: ${entityName}`
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
        </div>
      }
    >
      <Form
        name="create-edit-category-form"
        className="create-edit-category-form"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        ref={formRef}
        // hideRequiredMark
      >
        {SelectFormType}
      </Form>
    </Drawer>
  );
};

export default CategoryDrawer;
