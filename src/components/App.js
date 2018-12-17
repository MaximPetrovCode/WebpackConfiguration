import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementValue, decrementValue } from '../actions/actions';

export class App extends Component {

  render() {
    let { lastAction, value, incremenValue, decrementValue } = this.props;
    return (
      <div>
        Последнее действие: {lastAction}
        <br />
        Значение: {value}
        <br />
        <input type="button" value="Увеличить" onClick={incremenValue.bind(this, value)} />
        <input type="button" value="Уменьшить" onClick={decrementValue.bind(this, value)} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    value: store.reducer.value,
    lastAction: store.reducer.lastAction
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incremenValue: (value) => dispatch(incrementValue(value)),
    decrementValue: (value) => dispatch(decrementValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
