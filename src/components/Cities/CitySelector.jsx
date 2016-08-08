import {Select} from 'antd';
import React, {Component, PropTypes} from 'react';
const Option = Select.Option;

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = value => this.props.onChange(value)
  }

  render() {
    return (
      <Select onChange={this.handleChange} allowClear={true}>
        <Option value="1">南京</Option>
        <Option value="2">河南</Option>
        <Option value="3">北京</Option>
      </Select>
    );
  }
}

export default CitySelector;
