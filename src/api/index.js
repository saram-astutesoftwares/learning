import axios from 'axios'
import axiosCancel from 'axios-cancel'


// constants
import {ACCESS_TOKEN, BASE_URL} from "../constants"
import { getCookie } from 'cookies-next';

//any global headers go here.
let headers = {
    Accept: "application/json",

};
// create axios instance
export const Axios = axios.create({
    baseURL: BASE_URL + "/",
    headers: headers,
});

console.log(getCookie(ACCESS_TOKEN))
console.log(getCookie(ACCESS_TOKEN), "Saram")

// check if we have a token and then append it to the axios instance
Axios.interceptors.request.use(
    config => {
        const token = getCookie(ACCESS_TOKEN);
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

Axios.interceptors.response.use((response) => {
    return response
  }, function (error) {
    // const originalRequest = error.config;
    if (error.response && error.response.status === 401){
        error_alert(JSON.stringify(error.response.data.detail));
        return new Promise(() => { });
    } else if (error.response && error.response.status === 403){
        error_alert("Your session expired! Please log in again to continue");
        return new Promise(() => { });
    }else {
        return Promise.reject(error);
    }

}); 

// Using this because we might have to cancel requests
axiosCancel(Axios, {
    debug: false // default
})