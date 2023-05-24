
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  workplaceLoading: true,
};

export const workplaceReducer = createReducer(initialState, {
  // Create workplace
  workplaceCreateRequest: (state) => {
    state.workplaceLoading = true;
  },
  workplaceCreateSuccess: (state, action) => {
    state.workplaceLoading = false;
    state.workplace = action.payload;
    state.successMessage = action.payload.successMessage;
    state.success = true;
  },
  workplaceCreateFail: (state, action) => {
    state.workplaceLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // Read workplace
  getWorkplacesRequest: (state) => {
    state.workplaceLoading = true;
  },
  getWorkplacesSuccess: (state, action) => {
    state.workplaceLoading = false;
    state.workplace = action.payload;
  },
  getWorkplacesFailed: (state, action) => {
    state.workplaceLoading = false;
    state.error = action.payload;
  },

  //  Upadte workplace
  updateWorkplaceRequest: (state) => {
    state.workplaceLoading = true;
  },
  updateWorkplaceSuccess: (state, action) => {
    state.workplaceLoading = false;
    state.successMessage = action.payload.successMessage;
    state.workplace = action.payload.radSource;
  },
  updateWorkplaceFailed: (state, action) => {
    state.workplaceLoading = false;
    state.error = action.payload;
  },

  // Delete workplace
  deleteWorkplaceRequest: (state) => {
    state.workplaceLoading = true;
  },
  deleteWorkplaceSuccess: (state, action) => {
    state.workplaceLoading = false;
    state.message = action.payload;
  },
  deleteWorkplaceFailed: (state, action) => {
    state.workplaceLoading = false;
    state.error = action.payload;
  },


  clearErrors: (state) => {
    state.error = null;
  },
  clearMessages: (state) => {
    state.successMessage = null;
  },
});