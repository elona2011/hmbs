import React from 'react';
import {ajax} from '~/services/ajax.js'

var enhanceComponent = (Component) => class Enhance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      managers: []
    }
    this.Store = {
      _handlers: {
        value: [],
        managers: []
      },
      value: '',
      managers: [],
      onChange: function(key, handler) {
        this._handlers[key].push(handler);
      },
      set: function(key, value) {
        this[key] = value;
        this._handlers[key].forEach(handler => handler())
      },
      get: function(key) {
        return this[key];
      }
    };
    ajax({url: 'decorationCompany/people/getProjectManagers', type: 'GET'}).then(d => {
      this.Store.set('managers', d.data)
    })
    this.Store.onChange('value', function() {
      this.setState({value: this.Store.get('value')})
      this.props.onSelect && this.props.onSelect(this.Store.get('value'))
    }.bind(this));
    this.Store.onChange('managers', function() {
      this.setState({managers: this.Store.get('managers').slice()})
    }.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    this.Store.value = nextProps.value
    this.setState({value: this.Store.get('value')})
  }

  render() {
    return (<Component onSelect={this.Store.set.bind(this.Store)} value={this.state.value} managers={this.state.managers}/>)
  }
};

export default enhanceComponent;
