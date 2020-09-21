import CUSTOMER_MANAGEMENT_ACTION_TYPE from "./actionTypes/customerManagementActionTypes";

const customerManagementState = {
  customers: [],
};

const customerManagementReducer = (state = customerManagementState, action) => {
  switch (action.type) {
    case CUSTOMER_MANAGEMENT_ACTION_TYPE.FETCH_CUSTOMERS:
      state = { ...state, customers: action.customers };
      break;

    case CUSTOMER_MANAGEMENT_ACTION_TYPE.FETCH_CUSTOMERS_SUCCESS:
      break;

    case CUSTOMER_MANAGEMENT_ACTION_TYPE.FETCH_CUSTOMERS_FAIL:
      break;

    default:
      break;
  }
  return state;
};

export default customerManagementReducer;
