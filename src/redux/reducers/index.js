import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import transaction from "./transaction";

const authConfig = {
  key: "auth",
  storage,
};
// const transactionConfig = {
//   key: "transaction",
//   storage,
// };

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  transaction,
});

export default reducer;
