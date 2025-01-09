
import axiosInstance from "../utils/AxiosInstance";

interface actionTypes {
  (action: { type: string; message?: string; payload?: any }) : void;
}

const apiInstance =
  (
    route: string,
    request: string,
    sucesss: string,
    failure: string,
    formData?: any
  ) =>
  async (action: actionTypes) => {
    try {
      let res: { data: { message: string; payload: any }};
      action({
        type: request,
      });

      if (formData) {
        res = await axiosInstance.post(route , formData);
      } else {
        res = await axiosInstance.get(route);
      }
      action({
        type: sucesss,
        message: res.data.message,
        payload: res.data.payload,
      });
    } catch (error) {
      console.error(error);
      action({
        type: failure,
        message: "Server Error | 500 ",
      });
    }
  };

export const UserDataRequest = () =>
  apiInstance("/user/getuser", "APIREQUEST", "APISUCCESS", "APIFAILURE");

export const ProductDataRequest = () =>
  apiInstance(
    "/services/all",
    "ProductDataRequest",
    "ProductDataSuccess",
    "ProductDataError"
  );
export const UserRegister = (formData: any) =>
  apiInstance(
    "/user/register",
    "APIREQUEST",
    "APISUCCESS",
    "APIFAILURE",
    formData
  );
