import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6b2c7b7d88fe44a0ba920c1ac0f07384"
    }
})