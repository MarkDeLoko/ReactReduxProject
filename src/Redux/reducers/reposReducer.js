const SET_REPOS = 'SET_REPOS'


const defaultState = {
  items: [],
  isFetching: true
}


export default function reposReducer(state = defaultState, action){
  switch(action.type){
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items
      }
    default:
      return state;
  }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})

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