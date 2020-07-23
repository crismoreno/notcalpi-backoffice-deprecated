import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchMadeAts,
  fetchMadeAtsByProjectId,
} from '../../helpers/GET/getCategories';

import { getMadeAts, getMadeAtsByProjectId } from '../../reducers/index';

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

const ProjectDrawer = ({
  visibility,
  onClose,
  project,
  madeAtsInProject,
  madeats,
  dispatch,
}) => {
  let isCreateForm = true;

  if (project !== null && project.title) {
    isCreateForm = false;
    const {
      id,
      orderby,
      title,
      customer,
      collaborators,
      completion_date,
      description,
      link_to_repo,
      link_to_prod,
      link_to_doownload,
      video,
      is_featured,
      show,
    } = project;

    useEffect(() => {
      dispatch(fetchMadeAtsByProjectId(project.id));
      if (!madeats.length) {
        dispatch(fetchMadeAts(project.id));
      }
    }, [project.id]);
  } else {
    isCreateForm = true;
  }

  // const formRef = useRef(null);

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
  // const MadeAtsSelectorKind = () =>
  //   madeAtsInProject && madeAtsInProject[0] ? (
  //     <Select defaultValue={madeAtsInProject[0].madeat.short_name}>
  //       {madeAtsChildren}
  //     </Select>
  //   ) : (
  //     <Select placeholder="Made At">{madeAtsChildren}</Select>
  //   );

  if (madeAtsInProject && madeAtsInProject[0]) {
    console.log(madeAtsInProject[0].madeat.short_name);
  }

  const titleInitialValue = isCreateForm === true ? null : project.title;
  const cutomerInitialValue = isCreateForm === true ? null : project.customer;
  const collaboratorsInitialValue =
    isCreateForm === true ? null : project.collaborators;
  const complation_dateInitialValue =
    isCreateForm === true ? null : project.completion_date;
  const orderbyInitialValue = isCreateForm === true ? null : project.orderby;
  const linkToProdInitialValue =
    isCreateForm === true ? null : project.link_to_prod;
  const linkToRepoInitialValue =
    isCreateForm === true ? null : project.link_to_repo;
  const linkToDownloadInitialValue =
    isCreateForm === true ? null : project.link_to_download;
  const linkToVideoloadInitialValue =
    isCreateForm === true ? null : project.video;
  const featuredInitialValue =
    isCreateForm === false && project && project.is_featured ? 'checked' : null;
  const visibleInitialValue =
    isCreateForm === false && project && project.show ? 'checked' : null;
  const madeAtsInitialValue =
    madeAtsInProject && madeAtsInProject[0]
      ? madeAtsInProject[0].madeat.short_name
      : null;
  const descriptionInitialValue =
    isCreateForm === true ? null : project.description;

  return (
    <Drawer
      title={
        isCreateForm === true
          ? `Add new project`
          : `Edit project: ${project.title}`
      }
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
        name="create-edit-project-form"
        className="create-edit-project-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          title: titleInitialValue,
          customer: cutomerInitialValue,
          collaborators: collaboratorsInitialValue,
          completion_date: complation_dateInitialValue,
          orderby: orderbyInitialValue,
          link_to_prod: linkToProdInitialValue,
          link_to_repo: linkToRepoInitialValue,
          link_to_download: linkToDownloadInitialValue,
          video: linkToVideoloadInitialValue,
          featured: featuredInitialValue,
          visible: visibleInitialValue,
          madeatsInput: madeAtsInitialValue,
          description: descriptionInitialValue,
        }}
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
                  required: isCreateForm === true ? true : false,
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
                  required: isCreateForm === true ? true : false,
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
                  required: isCreateForm === true ? true : false,
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
                  required: isCreateForm === true ? true : false,
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
                  required: isCreateForm === true ? true : false,
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
                  required: isCreateForm === true ? true : false,
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
                  required: isCreateForm === true ? true : false,
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
                  required: isCreateForm === true ? true : false,
                  message: 'Description',
                },
              ]}
            >
              {!isCreateForm ? (
                <TextArea autoSize placeholder="Description" />
              ) : (
                <TextArea rows={4} placeholder="Description" />
              )}
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
  madeAtsInProject: getMadeAtsByProjectId(state),
});

export default connect(mapStateToProps)(ProjectDrawer);
