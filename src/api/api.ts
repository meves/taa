import axios from "axios";
import { setInterceptors } from "./interceptors"


export const baseURL = process.env.REACT_APP_BASE_URL

export const instance = setInterceptors(
    axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })
)
