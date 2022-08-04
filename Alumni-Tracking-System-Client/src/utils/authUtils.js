import { isLoggedIn } from "../services/userService";

const isUserAuthenticated = () => {
   return  isLoggedIn();
}

export{
    isUserAuthenticated
}