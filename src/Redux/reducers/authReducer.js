const SET_REPOS = 'SET_REPOS'
const SET_LOGIN = 'SET_LOGIN'

const defaultState = {
  items: [],
  isFetching: true,
  visible: false,
  authToken: null
}


export default function authReducer(state = defaultState, action){
  switch(action.type){
    case SET_LOGIN:
      return {
        ...state,
        items: action.payload.items
      }
    default:
      return state;
  }
}


export const setLogin = (token) => ({type: SET_LOGIN, payload: token})
// export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})

// export const setCount = (count) => ({type: SET_COUNT, payload: count})

// export default function reposReducer(state = defaultState, action){
//   switch(action.type){
//     case SET_COUNT:
//       return {
//         ...state,
//         count: action.payload
//       }
//     default:
//       return state;
//   }
// }