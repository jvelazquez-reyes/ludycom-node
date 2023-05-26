import axios from "axios";
import { server } from "../../server";

// create user
export const createUser =
  (names, surnames, birthdate, email, document, code, salary, status) => async (dispatch) => {
    try {
      dispatch({
        type: "usersCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/users/users-post`,
        {
          names,
          surnames,
          birthdate,
          email,
          document,
          code,
          salary,
          status,
        },
        { withCredentials: true }
      );
      dispatch({
        type: "usersCreateSuccess",
        payload: {
          successMessage: "New user has been created successfully!",
          radSource: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "usersCreateFail",
        payload: error.response.data.message,
      });
    }
  };

// get users
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUsersRequest",
    });

    const { data } = await axios.get(
      `${server}/users/all-users`,
      { withCredentials: true }
    );
    dispatch({
      type: "getUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getUsersFailed",
      payload: error.response.data.message,
    });
  }
};

// update user
export const updateUser =
  (names, surnames, birthdate, email, document, code, salary, status, id) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUsersRequest",
      });

      const { data } = await axios.put(
        `${server}/users/users-update/${id}`,
        {
          names,
          surnames,
          birthdate,
          email,
          document,
          code,
          salary,
          status,
          id,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateUsersSuccess",
        payload: {
          successMessage: "The user has been updated successfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateUsersFailed",
        payload: error.response.data.message,
      });
    }
  };

// delete users
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUsersRequest",
    });
    const { data } = await axios.delete(
      `${server}/users/user-delete/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteUsersSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteUsersFailed",
      payload: error.response.data.message,
    });
  }
};
