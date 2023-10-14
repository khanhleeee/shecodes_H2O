import axios from "axios";
import cookie from "react-cookies";

const SERVER = "https://partnerup-api.azurewebsites.net";


export const endpoints = {
  "companies": `${SERVER}/api/companies?pageIndex=1&pageSize=10`,
};

export const authApi = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            "Authorization": cookie.load("token"),
        }
    })
}

export default axios.create({
    baseURL: SERVER
})