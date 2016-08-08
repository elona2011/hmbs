import React from 'react';
import {Form, Row, Col} from 'antd';
import Response from '~/components/ProjectListsDetail/Problems/Response'

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

class Trouble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var trouble = []
    this.props.trouble && this.props.trouble.forEach((n, i) => trouble.push(
      <div>
        <Response response={n.troubleReplieList}/>
        <FormItem key={i} label="隐患记录" {...formItemLayout1}>
          <p className="ant-form-text">{n.content}</p>
        </FormItem>
        <FormItem {...formItemLayout} key={i}>
          <p className="ant-form-text">{n.createTime}</p>
        </FormItem>
      </div>
    ))
    this.setState({trouble})
  }

  componentWillReceiveProps(nextProps) {
    var trouble = []
    this.props.trouble && this.props.trouble.forEach((n, i) => trouble.push(
      <div>
        <Response response={n.troubleReplieList}/>
        <FormItem key={i} label="隐患记录">
          <p className="ant-form-text">{n.content}</p>
        </FormItem>
        <FormItem {...formItemLayout} key={i}>
          <p className="ant-form-text">{n.createTime}</p>
        </FormItem>
      </div>
    ))
    this.setState({trouble})
  }

  render() {
    return (
      <div>
        {this.state.trouble}
      </div>
    );
  }
}

export default Trouble
