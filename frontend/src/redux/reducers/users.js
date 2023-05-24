import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  usersLoading: true,
};

export const usersReducer = createReducer(initialState, {
  // Create user
  usersCreateRequest: (state) => {
    state.usersLoading = true;
  },
  usersCreateSuccess: (state, action) => {
    state.usersLoading = false;
    state.users = action.payload;
    state.successMessage = action.payload.successMessage;
    state.success = true;
  },
  usersCreateFail: (state, action) => {
    state.usersLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // Read users
  getUsersRequest: (state) => {
    state.usersLoading = true;
  },
  getUsersSuccess: (state, action) => {
    state.usersLoading = false;
    state.users = action.payload;
  },
  getUsersFailed: (state, action) => {
    state.usersLoading = false;
    state.error = action.payload;
  },

  //  Upadte users
  updateUsersRequest: (state) => {
    state.usersLoading = true;
  },
  updateUsersSuccess: (state, action) => {
    state.usersLoading = false;
    state.successMessage = action.payload.successMessage;
    state.users = action.payload.radSource;
  },
  updateUsersFailed: (state, action) => {
    state.usersLoading = false;
    state.error = action.payload;
  },

  // Delete user
  deleteUsersRequest: (state) => {
    state.usersLoading = true;
  },
  deleteUsersSuccess: (state, action) => {
    state.usersLoading = false;
    state.message = action.payload;
  },
  deleteUsersFailed: (state, action) => {
    state.usersLoading = false;
    state.error = action.payload;
  },


  clearErrors: (state) => {
    state.error = null;
  },
  clearMessages: (state) => {
    state.successMessage = null;
  },
});
