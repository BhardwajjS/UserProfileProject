import axios from "axios";

export const APICALL = (url, config) => axios.get(url, config);
