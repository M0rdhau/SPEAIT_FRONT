import React from 'react'
import { useField } from '../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../reducers/userReducer'

const Login = () => {
  const userName = useField('username')
  const password = useField('password')
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const handleLogin = async () => {
    try{
      dispatch(loginUser(userName.value, password.value))
      userName.clear()
      password.clear()
    }catch (e){
      console.log(e)
    }
  }
  if(user !== null){
    return(
      <div>Hello, {user.username}</div>
    )
  }else{
    return(
      <div className="loginForm">
        Username: <input value={userName.value} onChange={userName.onChange} />
        Password: <input value={password.value} onChange={password.onChange} />
        <button onClick={handleLogin} >Log In</button>
      </div>
    )
  }
}

export default Login
