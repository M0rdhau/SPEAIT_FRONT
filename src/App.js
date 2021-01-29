import React, { useEffect } from 'react'
import PostList from './components/PostList'
import { useDispatch, useSelector } from 'react-redux'
import { initPosts } from './reducers/postReducer'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Post from './components/Post'

function App() {
  const dispatch = useDispatch()

  const posts = useSelector(state => state.posts)

  const padding = {
    padding: 5
  }

  useEffect(() => {
    dispatch(initPosts())
  }, [dispatch])

  const match = useRouteMatch('/posts/:id')
  const post = match
    ? posts.find(post => post.id === Number(match.params.id))
    : null

  return (
    <div>
      <header>
        <div>
          <Link style={padding} to='/'>home</Link>
        </div>
        <h1>Do AIs dream of hexadecimal sheep?</h1>
        <h4>A blog for SPEAIT course</h4>
      </header>
      <Switch>
        <Route path='/posts/:id'>
          <Post post={ post } />
        </Route>
        <Route path='/'>
          <PostList/>
        </Route>
      </Switch>
      <footer>
        For Tallinn university of Technology
      </footer>
    </div>
  )
}

export default App
