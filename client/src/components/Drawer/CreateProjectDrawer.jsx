import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { createProject } from '../../helpers/CREATE/createProject';

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
  message,
} from 'antd';
const { Item } = Form;
const { TextArea } = Input;
const { Option } = Select;

import { UploadOutlined } from '@ant-design/icons';

import {
  fetchMadeAts,
  fetchTags,
  fetchCodingLangs,
} from '../../helpers/GET/getCategories';

import { getMadeAts, getTags, getCodingLangs } from '../../reducers/index';

const ProjectCreateDrawer = ({
  visibility,
  handleClose,
  madeats,
  tags,
  codingLangs,
  fetchMadeAtsDispatcher,
  fetchTagsDispatcher,
  fetchCodingLangsDispatcher,
  createProjectDispatcher,
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (!madeats.length) {
      fetchMadeAtsDispatcher();
    }
    if (!tags.length) {
      fetchTagsDispatcher();
    }
    if (!codingLangs.length) {
      fetchCodingLangsDispatcher();
    }
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    // formRef.current.resetFields();
  };
  const onFinish = (values) => {
    console.log(values, 'values');
    createProjectDispatcher(values, handleClose);
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

  const tagsChildren = [];
  for (let i = 0; i < tags.length; i++) {
    tagsChildren.push(
      <Option key={tags[i].id} value={tags[i].id}>
        {tags[i].name}
      </Option>
    );
  }
  const codingLangChildren = [];
  for (let i = 0; i < codingLangs.length; i++) {
    codingLangChildren.push(
      <Option key={codingLangs[i].id} value={codingLangs[i].id}>
        {codingLangs[i].name}
      </Option>
    );
  }

  return (
    <Drawer
      title="Add new project"
      width={900}
      onClose={handleClose}
      visible={visibility}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={handleClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          {/* <Button onClick={handleClose} type="primary">
            Submit
          </Button> */}
        </div>
      }
    >
      <Form
        layout="vertical"
        ref={formRef}
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

        <Row gutter={16}>
          <Col span={12}>
            <Item
              name="tags"
              label="Tags"
              hasFeedback
              rules={[
                {
                  required: false,
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Tags">
                {tagsChildren}
              </Select>
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="codingLangs"
              label="CodingLangs"
              hasFeedback
              rules={[
                {
                  required: false,
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="CodingLanguages">
                {codingLangChildren}
              </Select>
            </Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Item
              name="show"
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
              name="is_featured"
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
              name="madeats"
              label="Made At"
              hasFeedback
              rules={[
                {
                  required: false,
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

const mapDispatchToProps = (dispatch) => ({
  fetchMadeAtsDispatcher: () => dispatch(fetchMadeAts()),
  fetchTagsDispatcher: () => dispatch(fetchTags()),
  fetchCodingLangsDispatcher: () => dispatch(fetchCodingLangs()),
  createProjectDispatcher: (values, onFinish) =>
    dispatch(
      createProject(values, (err, result) => {
        if (result) {
          message.success(`Project ${values.title} created successfully!`);
          onFinish();
        } else {
          console.log(err, 'err');
        }
      })
    ),
});

const mapStateToProps = (state) => ({
  tags: getTags(state),
  madeats: getMadeAts(state),
  codingLangs: getCodingLangs(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCreateDrawer);
