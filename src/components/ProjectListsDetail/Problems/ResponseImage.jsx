import React from 'react';

class ResponseImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var imageList = []
    this.props.imageList && this.props.imageList.forEach((n, i) => imageList.push(<img src={n.url}/>))
    this.setState({imageList})
  }

  componentWillReceiveProps(nextProps) {
    var imageList = []
    this.props.imageList && this.props.imageList.forEach((n, i) => imageList.push(<img src={n.url}/>))
    this.setState({imageList})
  }

  render() {
    return (
      <div>
        {this.state.imageList}
      </div>
    );
  }
}

export default ResponseImage
