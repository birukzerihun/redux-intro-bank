import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "./features/customers/CustomerSlice";
import accountReducer from "./features/accounts/AccountSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
