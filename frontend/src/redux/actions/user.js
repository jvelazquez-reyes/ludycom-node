import axios from "axios";
import { server } from "../../server";
import { cleanFilterItem } from "@mui/x-data-grid/hooks/features/filter/gridFilterUtils";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    //console.log(data)
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// user update information
export const updateUserInformation =
  (
    username,
    email,
    current_location,
    dateDoc,
    first_surname,
    second_surname,
    first_name,
    middle_name,
    age,
    gender,
    place_birth,
    birthdate,
    RFC,
    CURP,
    highest_degree,
    street,
    street_number,
    neighborhood,
    city,
    CP,
    state,
    mobile,
    work_area,
    work_role,
    mobile_company,
    password
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          username,
          email,
          current_location,
          dateDoc,
          first_surname,
          second_surname,
          first_name,
          middle_name,
          age,
          gender,
          place_birth,
          birthdate,
          RFC,
          CURP,
          highest_degree,
          street,
          street_number,
          neighborhood,
          city,
          CP,
          state,
          mobile,
          work_area,
          work_role,
          mobile_company,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };