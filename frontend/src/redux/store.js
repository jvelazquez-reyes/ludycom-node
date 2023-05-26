import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/users";
import { workplaceReducer } from "./reducers/workplace";
import { userReducer } from "./reducers/user";

const Store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    workplace: workplaceReducer,
  },
});

export default Store;
