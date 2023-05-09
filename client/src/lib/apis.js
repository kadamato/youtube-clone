import axios from "axios";


export const UserRequest = axios.create({
    baseURL: "http://localhost:9000",
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
    }
});

export const ClientRequest = axios.create({
    baseURL: "http://localhost:9000",
});