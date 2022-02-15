import {useAuthSelector} from "./selectors/UseAuthSelector";

export const useAuth = () => {
  const {accessToken} = useAuthSelector()
  return accessToken

}

