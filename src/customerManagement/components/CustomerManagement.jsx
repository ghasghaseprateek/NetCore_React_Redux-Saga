import React, { Component } from "react";
import { connect } from "react-redux";

import { loadCustomers } from "../actions/customerManagementActions";

class CustomerManagement extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customerManagement.customers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCustomers: () => dispatch(loadCustomers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerManagement);
