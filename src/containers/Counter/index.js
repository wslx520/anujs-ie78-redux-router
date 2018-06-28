
import React, { Component } from 'react';
import Timer from 'component/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from 'actions/CounterActions';

class Counter extends Component {
  render() {
    const props = this.props;
    // const { store } = this.context;
    // debugger;
    return (
      <div className="box">
        <Timer {...props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: bindActionCreators(CounterActions.increment, dispatch),
});

Counter.contextTypes = {
  store: React.PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
