import axios from "axios";
import { server } from "../../server";

// create workplace
export const createWorkplace =
  (code, name, manager, status) => async (dispatch) => {
    try {
      dispatch({
        type: "workplaceCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/workplaces/workplace-post`,
        {
          code,
          name,
          manager,
          status,
        },
        { withCredentials: true }
      );
      dispatch({
        type: "workplaceCreateSuccess",
        payload: {
          successMessage: "New workplace has been created successfully!",
          radSource: data.workplace,
        },
      });
    } catch (error) {
      dispatch({
        type: "workplaceCreateFail",
        payload: error.response.data.message,
      });
    }
  };

// get workplaces
export const getWorkplaces = () => async (dispatch) => {
  try {
    dispatch({
      type: "getWorkplacesRequest",
    });

    const { data } = await axios.get(
      `${server}/workplaces/all-workplaces`,
      { withCredentials: true }
    );
    dispatch({
      type: "getWorkplacesSuccess",
      payload: data.workplace,
    });
  } catch (error) {
    dispatch({
      type: "getWorkplacesFailed",
      payload: error.response.data.message,
    });
  }
};

// update wokrplace
export const updateWorkplace =
  (code, name, manager, status, id) => async (dispatch) => {
    try {
      dispatch({
        type: "updateWorkplaceRequest",
      });

      const { data } = await axios.put(
        `${server}/workplaces/workplace-update/${id}`,
        {
          code,
          name,
          manager,
          status,
          id,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateWorkplaceSuccess",
        payload: {
          successMessage: "The workplace has been updated successfully!",
          user: data.workplace,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateWorkplaceFailed",
        payload: error.response.data.message,
      });
    }
  };

// delete workplace
export const deleteWorkplace = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteWorkplaceRequest",
    });
    
    const { data } = await axios.delete(
      `${server}/workplaces/workplace-delete/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteWorkplaceSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteWorkplaceFailed",
      payload: error.response.data.message,
    });
  }
};