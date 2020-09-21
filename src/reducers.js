import { combineReducers } from "redux";

import customerManagementReducer from "./customerManagement/customerManagementReducer";

const rootReducer = combineReducers({
  customerManagement: customerManagementReducer,
});

export default rootReducer;
