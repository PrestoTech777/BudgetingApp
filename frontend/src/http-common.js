import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.1.92:5000/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});