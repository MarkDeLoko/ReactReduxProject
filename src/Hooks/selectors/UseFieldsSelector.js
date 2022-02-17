import {useSelector} from "react-redux";

export const useFieldsSelector = () => useSelector((state) => state.fieldsReducer);