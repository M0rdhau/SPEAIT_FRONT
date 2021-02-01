import loginService from '../services/login'

const USER_NAME = 'HEXADECIMAL_USERNAME'
const USER_TOKEN = 'HEXADECIMAL_TOKEN'

const userReducer = (state = null, action) => {
  switch(action.type){
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const loginUser = (username, password) => {
  return async dispatch => {
    try{
      const data = await loginService.login(username, password)
      window.localStorage.setItem(USER_NAME, data.username)
      window.localStorage.setItem(USER_TOKEN, data.token)
      dispatch({
        type: 'LOGIN',
        data
      })
    }catch (error){
      console.log('invalid data')
    }
  }
}

export const initUser = () => {
  const username = window.localStorage.getItem(USER_NAME)
  const token = window.localStorage.getItem(USER_TOKEN)
  if(username !== null && token !== null){
    return{
      type: 'LOGIN',
      data: { username, token }
    }
  }else{
    return{
      type: 'LOGOUT'
    }
  }
}

export const logOut = () => {
  return {
    type: 'LOGOUT'
  }
}

export default userReducer
