import { GET_TOKENS } from "../const/const";
import service from "../service/service";

export const getNewTokens = () => async (dispatch: any) => {
  try {
    if (localStorage.getItem("refresh-token")) {
        console.log("refersh");
      const getNewTokens = await service.getTokens(
        localStorage.getItem("refresh-token")
      );

      if (getNewTokens) {
        localStorage.setItem("refresh-token", getNewTokens.refresh_token);
        sessionStorage.setItem("access-token", getNewTokens.access_token);
        dispatch({
          type: GET_TOKENS
        });
      }
    }
  } catch (error) {
    console.log("error");
  }
};
