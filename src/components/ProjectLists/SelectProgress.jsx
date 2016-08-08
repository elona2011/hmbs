import {Select} from 'antd';
import React, {Component, PropTypes} from 'react';
const Option = Select.Option;

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = value => this.props.onChange(value)
  }

  render() {
    return (
      <Select onChange={this.handleChange} allowClear={true}>
        <Option value="0">准备开工</Option>
        <Option value="1">开工交底</Option>
        <Option value="2">水电验收</Option>
        <Option value="3">瓦木验收</Option>
        <Option value="4">竣工验收</Option>
      </Select>
    );
  }
}

export default Progress;
