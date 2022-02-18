import {useSelector} from "react-redux";

export const useChangePasswordSelector = () => useSelector((state) => state.changePasswordReducer);