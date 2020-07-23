import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMadeAts } from '../../helpers/GET/getCategories';

import { getMadeAts } from '../../reducers/index';

import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Switch,
  InputNumber,
  Select,
  Upload,
} from 'antd';
const { Item } = Form;
const { TextArea } = Input;
const { Option } = Select;

import { UploadOutlined } from '@ant-design/icons';

const ProjectCreateDrawer = ({ visibility, onClose, dispatch, madeats }) => {
  // const formRef = useRef(null);

  useEffect(() => {
    if (!madeats.length) {
      dispatch(fetchMadeAts());
    }
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    formRef.current.resetFields();
  };
  const onFinish = (values) => {
    console.log(values, 'values');
    formRef.current.resetFields();
  };

  const selectURLBefore = (
    <Select defaultValue="https://" className="select-before">
      <Option value="https://">https://</Option>
      <Option value="http://">http://</Option>
    </Select>
  );

  const madeAtsChildren = [];
  for (let i = 0; i < madeats.length; i++) {
    madeAtsChildren.push(
      <Option key={madeats[i].id} value={madeats[i].id}>
        {madeats[i].short_name}
      </Option>
    );
  }

  return (
    <Drawer
      title="Add new project"
      width={900}
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
          {/* <Button onClick={onClose} type="primary">
            Submit
          </Button> */}
        </div>
      }
    >
      <Form
        layout="vertical"
        // ref={formRef}
        name="create-project-form"
        className="create-project-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture">
                <Button>
                  <UploadOutlined /> Click to upload
                </Button>
              </Upload>
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="title"
              label="Title"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: `Add a valid Title`,
                },
              ]}
            >
              <Input placeholder="Title" />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="customer"
              label="Customer"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: `Add a valid Title`,
                },
              ]}
            >
              <Input placeholder="Customer" />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="collaborators"
              label="Collaborators"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: `Add a valid Collaborators`,
                },
              ]}
            >
              <Input placeholder="Collaborators" />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="completion_date"
              label="Completion Date"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: `Add a valid Complation Date`,
                },
              ]}
            >
              <Input placeholder="Completion Date" />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="orderby"
              label="Priority"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: `Add a valid Priority value`,
                },
              ]}
            >
              <InputNumber placeholder="Priority" style={{ width: '100%' }} />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="link_to_prod"
              label="Link to production"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir prod URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="link_to_repo"
              label="Link to repo"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir repo URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="link_to_download"
              label="Link to download"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir download URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="video"
              label="Link to Iframe"
              hasFeedback
              rules={[{ required: false, message: 'Add a valir iframe URL' }]}
            >
              <Input style={{ width: '100%' }} addonBefore={selectURLBefore} />
            </Item>
          </Col>
        </Row>

        {/* <Row gutter={16}>
          <Col span={12}>
            <Tags
              required={isCreateForm === true ? true : false}
              projectId={isCreateForm === true ? false : project.id}
            />
          </Col>
          <Col span={12}>
            <CodingLangs
              required={isCreateForm === true ? true : false}
              projectId={isCreateForm === true ? false : project.id}
            />
          </Col>
        </Row> */}

        <Row gutter={16}>
          <Col span={6}>
            <Item
              name="visible"
              label="Visible"
              valuePropName="checked"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: 'Visible',
                },
              ]}
            >
              <Switch />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name="featured"
              label="Featured"
              valuePropName="checked"
              hasFeedback
              rules={[
                {
                  required: false,
                  message: 'Featured',
                },
              ]}
            >
              <Switch />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="madeatsInput"
              label="Made At"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please select a MadeAt!',
                },
              ]}
            >
              <Select placeholder="Made At">{madeAtsChildren}</Select>
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Item
              name="description"
              label="Description"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Description',
                },
              ]}
            >
              <TextArea rows={4} placeholder="Description" />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-project-create-edit-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  madeats: getMadeAts(state),
});

export default connect(mapStateToProps)(ProjectCreateDrawer);
