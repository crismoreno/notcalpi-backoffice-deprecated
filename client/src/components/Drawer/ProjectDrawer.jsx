import React, { useRef } from 'react';
import { Drawer, Form, Button, Col, Row } from 'antd';

import InputNum from './components/InputNum.jsx';
import InputSwitch from './components/InputSwitch.jsx';
import InputText from './components/InputText.jsx';
import InputUrl from './components/InputUrl.jsx';
import CodingLangs from './components/CodingLangs.jsx';
import MadeAts from './components/MadeAts.jsx';
// import Selector from './components/Selector.jsx';
import Tags from './components/Tags.jsx';
import TextArea from './components/TextArea.jsx';
import Uploader from './components/Uploader.jsx';

const ProjectDrawer = ({ visibility, onClose, project }) => {
  let isCreateForm = true;

  if (project !== null && project.title) {
    isCreateForm = false;
  } else {
    isCreateForm = true;
  }

  if (isCreateForm === false) {
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
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values) => {
    console.log(values, 'values');
  };

  const formRef = useRef(null);

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
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
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
      >
        <Row gutter={16}>
          <Col span={24}>
            <Uploader />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <InputText
              required={isCreateForm === true ? true : false}
              inputName={'Title'}
              inputLabel={'Title'}
              inputPlaceholder={'Title'}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputText
              required={isCreateForm === true ? true : false}
              inputName={'Customer'}
              inputLabel={'Customer'}
              inputPlaceholder={'Customer'}
            />
          </Col>
          <Col span={12}>
            <InputText
              required={isCreateForm === true ? true : false}
              inputName={'Collaborators'}
              inputLabel={'Collaborators'}
              inputPlaceholder={'Collaborators'}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <InputText
              required={isCreateForm === true ? true : false}
              inputName={'Completion Date'}
              inputLabel={'Completion Date'}
              inputPlaceholder={'Completion Date'}
            />
          </Col>
          <Col span={12}>
            <InputNum
              inputName={'Priority'}
              inputLabel={'Priority'}
              required={isCreateForm === true ? true : false}
              inputPlaceholder={'Priority'}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputUrl
              required={isCreateForm === true ? true : false}
              inputName={'Production url'}
            />
          </Col>
          <Col span={12}>
            <InputUrl
              required={isCreateForm === true ? true : false}
              inputName={'Repository url'}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <InputUrl
              required={isCreateForm === true ? true : false}
              inputName={'Download url'}
            />
          </Col>
          <Col span={12}>
            <InputUrl
              required={isCreateForm === true ? true : false}
              inputName={'Iframe url'}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Tags required={isCreateForm === true ? true : false} />
          </Col>
          <Col span={12}>
            <CodingLangs required={isCreateForm === true ? true : false} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <InputSwitch
              inputName={'Visible'}
              required={isCreateForm === true ? true : false}
            />
          </Col>
          <Col span={6}>
            <InputSwitch
              inputName={'Featured'}
              required={isCreateForm === true ? true : false}
            />
          </Col>
          <Col span={12}>
            <MadeAts required={isCreateForm === true ? true : false} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <TextArea
              inputName={'Description'}
              required={isCreateForm === true ? true : false}
            />
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default ProjectDrawer;
