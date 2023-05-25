import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/users";
import { workplaceReducer } from "./reducers/workplace";

const Store = configureStore({
  reducer: {
    users: usersReducer,
    workplace: workplaceReducer,
  },
});

export default Store;
