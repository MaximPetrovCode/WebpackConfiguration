import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action } from '../actions/actions';

export class App extends Component {

  render() {
    let { value, action } = this.props;
    return (
      <div>
        <h1>Hello developer!</h1>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    value: store.reducer.value,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: () => dispatch(action()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
