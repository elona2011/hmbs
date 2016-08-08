import React from 'react';
import {Form, Icon, Row, Col} from 'antd';
import Check from '~/components/ProjectListsDetail/ContentCheck'

const FormItem = Form.Item;

const formItemLayout = {
  style: {
    marginBottom: 6
  }
};

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var contents = []
    this.props.contents && this.props.contents.forEach((n, i) => contents.push(
      <FormItem key={i} {...formItemLayout}>
        <Row>
          <Col span={22}>
            <p className="ant-form-text">{n.content}</p>
          </Col>
          <Col span={2}>
            <Check check={n.status}/>
          </Col>
        </Row>
      </FormItem>
    ))
    this.setState({contents})
  }

  componentWillReceiveProps(nextProps) {
    var contents = []
    nextProps.contents && nextProps.contents.forEach((n, i) => contents.push(
      <FormItem key={i} {...formItemLayout}>
        <Row>
          <Col span={22}>
            <p className="ant-form-text">{n.content}</p>
          </Col>
          <Col span={2}>
            <Check check={n.status}/>
          </Col>
        </Row>
      </FormItem>
    ))
    this.setState({contents})
  }

  render() {
    return (

      <Form horizontal>
        {this.state.contents}
      </Form >
    );
  }
}

export default Content
