import {useSelector} from "react-redux";

export const useSignupFieldsSelector = () => useSelector((state) => state.signupFieldsReducer);