import React, {Component, PropTypes} from 'react';
import {Form, Input, Row, Col} from 'antd';

const FormItem = Form.Item;

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      password: ''
    }
    this.handleOnChange1 = this.handleOnChange1.bind(this)
    this.handleOnChange2 = this.handleOnChange2.bind(this)
    this.handleOnChange3 = this.handleOnChange3.bind(this)
  }

  handleOnChange1(e) {
    this.props.onInput({name: e.target.value});
  }
  handleOnChange2(e) {
    this.props.onInput({phone: e.target.value});
  }
  handleOnChange3(e) {
    this.props.onInput({password: e.target.value});
  }

  render() {
    return (
      <Form horizontal>
        <Row>
          <FormItem label="姓名" labelCol={{
            span: 6
          }} wrapperCol={{
            span: 12
          }}>
            <Input onChange={this.handleOnChange1}/>
          </FormItem>
          <FormItem label="手机号" labelCol={{
            span: 6
          }} wrapperCol={{
            span: 12
          }}>
            <Input onChange={this.handleOnChange2}/>
          </FormItem>
          <FormItem label="密码" labelCol={{
            span: 6
          }} wrapperCol={{
            span: 12
          }}>
            <Input onChange={this.handleOnChange3} disabled={true} defaultValue="******"/>
          </FormItem>
        </Row>
      </Form>
    );
  }
}

export {Inputs}
