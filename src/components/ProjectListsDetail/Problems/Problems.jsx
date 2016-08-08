import React from 'react';
import {Card, Col, Row} from 'antd';
import Node from '~/components/ProjectListsDetail/Problems/ProblemsNode'

class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setProblem = this.setProblem.bind(this)
  }

  componentDidMount() {
    this.setProblem(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setProblem(nextProps)
  }

  setProblem(props) {
    var problem = []

    props.problem && props.problem.forEach((n, i) => {
      if (n.troubleNum) {
        problem.push(
          <Card key={i} title={'验收节点：' + n.name} bordered={true}>
            <Node node={n.projectNodeItemVoList}/>
          </Card>
        )
      }
    })
    this.setState({problem})
  }

  render() {
    return (
      <div>
        {this.state.problem}
      </div>
    );
  }
}

export default Problem
