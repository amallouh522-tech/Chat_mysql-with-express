
import axios from "axios";

async function mustLoginFetch() {
    const response = await axios.post("http://localhost:3000/api/mustlogin")
    const result = await response.data;
    if (result.isLogin) {
        return true;
    }else{
        return false;
    };
};



