import searchReducer from '../reducers/searchReducer'
import * as actions from '../actions/types'
import expect from 'expect'

describe('searchReducer', () => {
  it('should return the initial state when passed an empty action', () => {
    expect(
      searchReducer(undefined, {})
    ).toEqual({
      username: null,
      userObj: null,
    })
  })

  it('should handle the SET_USERNAME action', () => {
    expect(
      searchReducer(undefined, {type: actions.SET_USERNAME, payload: "matt-mcalister"})
    ).toEqual({
      username: "matt-mcalister",
      userObj: null,
    })
  })

  it('should handle the SET_USER_OBJ action', () => {

    let beforeState = {
      username: "matt-mcalister",
      userObj: null,
    }

    let mattMcalisterGitObj = {
      username: "matt-mcalister",
      hireable: "hopefully",
    }

    expect(
      searchReducer(beforeState, {type: actions.SET_USER_OBJ, payload: mattMcalisterGitObj })
    ).toEqual({
      username: "matt-mcalister",
      userObj: mattMcalisterGitObj,
    })
  })

  it('should handle the RESET_STATE action', () => {

    let beforeState = {
      username: "matt-mcalister",
      userObj: {
        username: "matt-mcalister",
        hireable: "hopefully",
      },
    }

    expect(
      searchReducer(beforeState, {type: actions.RESET_STATE })
    ).toEqual({
      username: null,
      userObj: null,
    })
  })
})
