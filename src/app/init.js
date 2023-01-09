import axios from "axios"

const initializeApp = () => {
    // Setting base URL for all API request via axios
    axios.defaults.baseURL = process.env.REACT_APP_API_URL

}

export default initializeApp