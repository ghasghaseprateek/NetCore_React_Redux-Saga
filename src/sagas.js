import { all, fork } from "redux-saga/effects";

import customerManagementSagas from "./customerManagement/sagas/customerManagementSaga";

function* rootSaga() {
  yield all([fork(customerManagementSagas)]);
}

export default rootSaga;
