import { Dispatch } from "redux";
import http from "../../Screens/utils/http";

const initialState = {
  country: {},
};

const key = "269844314660d028063be17453ef0473";

export const getCountry = (inp: string, nav: any) => (dispatch: Dispatch) => {
  return http
    .get(`https://restcountries.eu/rest/v2/name/${inp}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_COUNTRY", payload: res.data[0] });
      nav.navigate("Country", res.data[0]);
    })
    .catch((err) => alert(err));
};

export const getWeather = (cap: string, nav: any) => (dispatch: Dispatch) => {
  return http
    .get(`http://api.weatherstack.com/current?access_key=${key}&query=${cap}`)
    .then((res) => {
      dispatch({ type: "GET_WEATHER", payload: res.data.current });
      nav.navigate("Weather", res.data.current);
    })
    .catch((err) => alert(err));
};
