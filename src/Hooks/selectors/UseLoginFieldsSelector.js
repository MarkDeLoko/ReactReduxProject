import {useSelector} from "react-redux";

export const useLoginFieldsSelector = () => useSelector((state) => state.loginFieldsReducer);