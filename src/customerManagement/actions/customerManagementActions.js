import CUSTOMER_MANAGEMENT_ACTION_TYPE from "../actionTypes/customerManagementActionTypes";

const loadCustomers = (customers) => ({
  type: CUSTOMER_MANAGEMENT_ACTION_TYPE.FETCH_CUSTOMERS,
  customers,
});

export { loadCustomers };
