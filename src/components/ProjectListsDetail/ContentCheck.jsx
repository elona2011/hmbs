import React from 'react';
import {Icon} from 'antd';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    if (this.props.check)
      return (<Icon type="check-circle-o" style={{
        color: 'blue',
        fontSize: '20px'
      }}/>);
    else
      return null
  }
}

export default Check
