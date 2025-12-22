import axios from "axios";

export async function mustLoginFetch() {
    const response = await axios.post(
        "/api/mustlogin",
        {},
        { withCredentials: true }
    );

    return response.data.Islogin === true;
};


export async function LogoutFetch() {
    const response = await axios.post(
        "/api/logout",
        {},
        { withCredentials: true }
    );

    return response.data.succ === true;
};

