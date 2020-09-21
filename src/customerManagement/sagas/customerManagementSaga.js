import { takeLatest, all, fork, put } from "redux-saga/effects";

import CUSTOMER_MANAGEMENT_SAGA_ACTION_TYPE from "../actionTypes/customerManagementSagaActionTypes";
import { loadCustomers } from "../actions/customerManagementActions";

function* getCustomers() {
  yield put(loadCustomers(null));
}

function* watchGetCustomers() {
  yield takeLatest(
    CUSTOMER_MANAGEMENT_SAGA_ACTION_TYPE.FETCH_CUSTOMERS_SAGA,
    getCustomers
  );
}

export default function* customerManagementSaga() {
  yield all([fork(watchGetCustomers)]);
}
