import axios from "axios";

const URL = '';

const http = axios.create({baseURL: URL});

export default http;