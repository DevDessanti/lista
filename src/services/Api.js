import Axios from "axios";

Axios.defaults.headers.get["Content-Type"] = "application/json";
Axios.defaults.headers.get["Accept"] = "application/json";

const PROJETO  = Axios.create({
    baseURL: "https://6446a76d0431e885f01862bb.mockapi.io/"
});

export {PROJETO};