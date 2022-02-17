import {useSelector} from "react-redux";

export const useSignupSelector = () => useSelector((state) => state.signupReducer);