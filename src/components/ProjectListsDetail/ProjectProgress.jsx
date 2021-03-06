import React from 'react';
import {Form, Row, Col} from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
  style: {
    marginBottom: 6
  }
};

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var progress = []
    this.props.progress && this.props.progress.forEach((n, i) => progress.push(
      <FormItem key={i} {...formItemLayout}>
        <Row>
          <Col span={12}>
            <p className="ant-form-text">{n.startDate}</p>
          </Col>
          <Col span={12}>
            <p className="ant-form-text">{n.name}</p>
          </Col>
        </Row>
      </FormItem>
    ))
    this.setState({progress})
  }

  componentWillReceiveProps(nextProps) {
    var progress = []
    nextProps.progress.forEach((n, i) => progress.push(
      <FormItem key={i} {...formItemLayout}>
        <Row>
          <Col span={12}>
            <p className="ant-form-text">{n.startDate}</p>
          </Col>
          <Col span={12}>
            <p className="ant-form-text">{n.name}</p>
          </Col>
        </Row>
      </FormItem>
    ))
    this.setState({progress})
  }

  render() {
    return (
      <div>
        {this.state.progress}
      </div>
    );
  }
}

export default Progress
