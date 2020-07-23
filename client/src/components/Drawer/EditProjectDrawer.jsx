import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

// import { clearMadeAtsByProject } from '../../actions/categories';
import { updateProject } from '../../helpers/UPDATE/updateProject';

import {
  fetchMadeAts,
  fetchTags,
  fetchMadeAtsByProjectId,
  fetchTagsByProjectId,
  fetchCodingLangs,
  fetchCodingLangsByProjectId,
} from '../../helpers/GET/getCategories';

import {
  getMadeAts,
  getMadeAtsByProjectId,
  getTags,
  getTagsByProjectId,
  getCodingLangsByProjectId,
  getCodingLangs,
} from '../../reducers/index';

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

const ProjectEditDrawer = ({
  visibility,
  handleClose,
  project: {
    id,
    orderby,
    title,
    customer,
    collaborators,
    completion_date,
    description,
    link_to_repo,
    link_to_prod,
    link_to_download,
    video,
    is_featured,
    show,
  },
  madeAtsInProject,
  madeats,
  tags,
  fetchMadeAtsByProjectIdDispatcher,
  fetchTagsByProjectIdDispatcher,
  fetchCodingLangsDispatcher,
  fetchCodingLangsByProjectIdDispatcher,
  codingLangsInProject,
  codingLangs,
  fetchMadeAtsDispatcher,
  fetchTagsDispatcher,
  tagsInProject,
  updateProjectDispatcher,
}) => {
  useEffect(() => {
    fetchMadeAtsByProjectIdDispatcher(id);
    fetchTagsByProjectIdDispatcher(id);
    fetchCodingLangsByProjectIdDispatcher(id);
    if (!madeats.length) {
      fetchMadeAtsDispatcher();
    }
    if (!tags.length) {
      fetchTagsDispatcher();
    }
    if (!codingLangs.length) {
      fetchCodingLangsDispatcher();
    }
  }, [id]);

  const formRef = useRef(null);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    formRef.current.resetFields();
  };
  const onFinish = (values) => {
    console.log(values, 'values');
    updateProjectDispatcher(values, id, handleClose);
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
  const tagsDefaultChildren = [];
  if (tagsInProject.length && tagsInProject[0].tag) {
    for (let i = 0; i < tagsInProject.length; i++) {
      tagsDefaultChildren.push(tagsInProject[i].tag.name);
    }
  }

  const codingLangsDefaultChildren = [];
  if (codingLangsInProject.length && codingLangsInProject[0].codinglang) {
    for (let i = 0; i < codingLangsInProject.length; i++) {
      codingLangsDefaultChildren.push(codingLangsInProject[i].codinglang.name);
    }
  }

  const titleInitialValue = title;
  const cutomerInitialValue = customer;
  const collaboratorsInitialValue = collaborators;
  const complation_dateInitialValue = completion_date;
  const orderbyInitialValue = orderby;
  const linkToProdInitialValue = link_to_prod;
  const linkToRepoInitialValue = link_to_repo;
  const linkToDownloadInitialValue = link_to_download;
  const linkToVideoloadInitialValue = video;
  const featuredInitialValue = is_featured ? 'checked' : null;
  const visibleInitialValue = show ? 'checked' : null;
  const madeAtsInitialValue =
    madeAtsInProject && madeAtsInProject[0]
      ? madeAtsInProject[0].madeat.short_name
      : null;
  const descriptionInitialValue = description;

  return (
    <Drawer
      title={`Edit project: ${title}`}
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
          is_featured: featuredInitialValue,
          show: visibleInitialValue,
          tags: tagsDefaultChildren,
          codingLangs: codingLangsDefaultChildren,
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
                  required: false,
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
                  required: false,
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
                  required: false,
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
                  required: false,
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
              name="madeatsInput"
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
                  required: false,
                  message: 'Description',
                },
              ]}
            >
              <TextArea autoSize placeholder="Description" />
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
  // clearMadeAtsByProjectDispatcher: () => dispatch(clearMadeAtsByProject()),
  fetchMadeAtsByProjectIdDispatcher: (id) =>
    dispatch(fetchMadeAtsByProjectId(id)),
  fetchMadeAtsDispatcher: () => dispatch(fetchMadeAts()),
  fetchTagsByProjectIdDispatcher: (id) => dispatch(fetchTagsByProjectId(id)),
  fetchTagsDispatcher: () => dispatch(fetchTags()),
  fetchCodingLangsDispatcher: () => dispatch(fetchCodingLangs()),
  fetchCodingLangsByProjectIdDispatcher: (id) =>
    dispatch(fetchCodingLangsByProjectId(id)),
  updateProjectDispatcher: (values, idToUpdate, onFinish) =>
    dispatch(
      updateProject(values, idToUpdate, (err, result) => {
        if (result) {
          message.success(`Project ${values.title} was updated successfully!`);
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
  madeAtsInProject: getMadeAtsByProjectId(state),
  tagsInProject: getTagsByProjectId(state),
  codingLangsInProject: getCodingLangsByProjectId(state),
  codingLangs: getCodingLangs(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditDrawer);
