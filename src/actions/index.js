import * as actions from './types'
import { getUserProfile } from '../adapter'

const setUserObj = (userObj) => {
  return {
    type: actions.SET_USER_OBJ,
    payload: userObj,
  }
}


export const setUsername = (username) => {
  return (dispatch) => {
    dispatch({
      type: actions.SET_USERNAME,
      payload: username,
    })
    getUserProfile(username).then( userObj => {
      dispatch(setUserObj(userObj))
    })
  }
}

export const resetState = () => {
  return {
    type: actions.RESET_STATE,
  }
}
