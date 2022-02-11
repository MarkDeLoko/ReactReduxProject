import axios from 'axios'
import {setLogin} from "../../Redux/reducers/authReducer";


/*export const getRepos = (searchQuery = "stars:%3E1") => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
    dispatch(setRepos(response.data))
  }
}*/

export const getToken = (username = 'user', password = 'password') => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:3010/login', {
      params: {
        username: username,
        password: password
      }
    })
    console.log(response)
    dispatch(setLogin(response.data))
  }
}
