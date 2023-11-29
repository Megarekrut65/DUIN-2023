export const parseError = (err) => {
    try {
        const obj = JSON.parse(err.message);
        const message = obj.error ? obj.error : JSON.stringify(obj);
        if (typeof message !== "string"){
            return message.message?message.message:JSON.stringify(message);
        } 

        return message;
    } catch (error) {
        return err;
    }
};
export const getToken = ()=>localStorage.getItem("token");
export const getUsername = ()=>localStorage.getItem("username");

export const setUserData = (data)=>{
    localStorage.setItem("username", data.username);
    localStorage.setItem("token", data.token);
};