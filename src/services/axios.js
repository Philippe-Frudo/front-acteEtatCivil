import axios from "axios";

export const BaseURL = "http://localhost:8000/api/"
// const BaseURL = "https://list.com/api/"

export const makeRequest = axios.create({
    baseURL: BaseURL,
});