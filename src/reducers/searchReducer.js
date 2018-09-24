import * as actions from "../actions/types"

const searchStateDefault = {
  username: null,
  userObj: null,
}

export default function searchReducer( searchState = searchStateDefault, action ){
  switch (action.type){
    case actions.SET_USERNAME:
      return {
        ...searchState,
        username: action.payload,
      }
    case actions.SET_USER_OBJ:
      return {
        ...searchState,
        userObj: action.payload,
      }
    case actions.RESET_STATE:
      return {
        ...searchStateDefault,
      }
    default:
      return { ...searchState }
  }
}
