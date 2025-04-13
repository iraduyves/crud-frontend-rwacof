import ax from "axios";

const Axios = ax.create({
    baseURL: 'http://localhost:7000/api/v1/'
})

export default Axios;