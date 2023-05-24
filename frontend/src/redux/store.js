import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { usersReducer } from "./reducers/users";
import { workplaceReducer } from "./reducers/workplace";

const Store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    workplace: workplaceReducer,
  },
});

export default Store;
