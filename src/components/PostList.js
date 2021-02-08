import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { initPosts } from '../reducers/postReducer'
// import Post from './Post'

const PREVIEW_LENGTH = 30

const PostList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initPosts())
  }, [dispatch])

  const posts = useSelector(state => state.posts)
  //postbody.substring code looks questionable,I know.
  //but writing a regex would be much
  //more effort
  return (
    <div className="postCollection">
      {
        posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map(post => {
          const postBody = post.content.substring(0, PREVIEW_LENGTH)
          return(
            <div className="postBody" key={post.id}>
              <h3>{post.title}</h3>
              <h5>{post.date}</h5>
              <p>{postBody}... <Link to={`/posts/${post.id}`}>show more</Link></p>
            </div>
          )
        } )
      }
    </div>
  )
}

export default PostList
