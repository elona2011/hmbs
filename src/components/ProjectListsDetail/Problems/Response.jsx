import React from 'react';
import {Form, Row, Col} from 'antd';
import ResponseImage from '~/components/ProjectListsDetail/Problems/ResponseImage'

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 16
  },
  wrapperCol: {
    span: 8
  },
  style: {
    marginBottom: 6
  }
};
const formItemLayout1 = {
  labelCol: {
    span: 2
  },
  wrapperCol: {
    span: 21
  },
  style: {
    marginBottom: 6
  }
};

class Response extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var response = []
    this.props.response && this.props.response.forEach((n, i) => response.push(
      <div>
        <FormItem key={i} label="整改回复" {...formItemLayout1}>
          <p className="ant-form-text">{n.content}</p>
        </FormItem>
        <ResponseImage imageList={n.imageList}/>
        <FormItem {...formItemLayout} key={i}>
          <p className="ant-form-text">{n.createTime}</p>
        </FormItem>
      </div>
    ))
    this.setState({response})
  }

  componentWillReceiveProps(nextProps) {
    var response = []
    this.props.response && this.props.response.forEach((n, i) => response.push(
      <div>
        <FormItem key={i} label="整改回复">
          <p className="ant-form-text">{n.content}</p>
        </FormItem>
        <ResponseImage imageList={n.imageList}/>
        <FormItem {...formItemLayout} key={i}>
          <p className="ant-form-text">{n.createTime}</p>
        </FormItem>
      </div>
    ))
    this.setState({response})
  }

  render() {
    return (
      <div>
        {this.state.response}
      </div>
    );
  }
}

export default Response
