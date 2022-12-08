import { Form, Input, Row, Col } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 },
  },
};

const Seo = (props: any) => {
  const { onFormChange, form } = props;

  return (
    <Row>
      <Col span={12}>
        <Form form={form} onValuesChange={onFormChange} {...formItemLayout}>
          <Form.Item label="SEO标题" name="seo_title">
            <Input />
          </Form.Item>

          <Form.Item label="SEO关键字" name="seo_keywords">
            <Input />
          </Form.Item>

          <Form.Item label="SEO描述" name="seo_description">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Seo;
