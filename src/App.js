import React, { useEffect } from 'react'
import PostList from './components/PostList'
import { useDispatch } from 'react-redux'
import { initPosts } from './reducers/postReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initPosts())
  }, [dispatch])

  return (
    <PostList/>
  )
}

export default App
