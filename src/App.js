import React, { useEffect } from 'react'
import PostList from './components/PostList'
import { useDispatch, useSelector } from 'react-redux'
// import { initPosts } from './reducers/postReducer'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Post from './components/Post'
// import Login from './components/Login'
import { initUser } from './reducers/userReducer'
import PostForm from './components/PostForm'
import rssImage from './images/Feed-icon.png'
import sheepImage from './images/pider_sheep.png'
import About from './components/About'

function App() {
  const dispatch = useDispatch()

  const posts = useSelector(state => state.posts)

  const padding = {
    padding: 5
  }

  useEffect(() => {
    // dispatch(initPosts())
    dispatch(initUser())
  }, [dispatch])

  const match = useRouteMatch('/posts/:id')

  const post = (match && posts !== undefined)
    ? posts.find(post => post.id === match.params.id)
    : null

  return (
    <div className="mainBody">
      <header>
        <nav>
          <div className='actualNav'>
            <Link style={padding} to='/'><strong>Home</strong></Link>
            <Link style={padding} to='/about'><strong>About</strong></Link>
          </div>
          {/*<Link style={padding} to='/createNew'><strong>New Post</strong></Link>*/}
          <Link to='/'><img src={sheepImage} width='128' height='128'/></Link>
          <a href='/feed.rss' target="_blank"><img src={rssImage} width='28' height='28'/></a>
          {/*<Login />*/}
        </nav>
        <h1>Does AI dream of Hexadecimal Sheep?</h1>
        <h4>A blog for SPEAIT course</h4>
      </header>
      <main>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/createNew' >
            <PostForm/>
          </Route>
          <Route path='/posts/:id'>
            <Post post={ post } />
          </Route>
          <Route path='/'>
            <PostList/>
          </Route>
        </Switch>
      </main>
      <footer>
        For Tallinn university of Technology
      </footer>
    </div>
  )
}

export default App
