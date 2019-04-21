import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends Component {
  render() {
    const { isLogin } = this.props;
    console.log(isLogin);
    if (isLogin) {
      return <div>write</div>
    } else {
      return <Redirect to="/login"></Redirect>
    }
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
});

export default connect(mapStateToProps, null)(Write);
