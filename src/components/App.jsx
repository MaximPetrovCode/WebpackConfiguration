import React, { Component } from "react";
import { connect } from "react-redux";
import { actionOne } from "../actions/actions";

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello developer!</h1>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        value: store.reducer.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: () => dispatch(actionOne())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
