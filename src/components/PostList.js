import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import Post from './Post'

const PREVIEW_LENGTH = 30

//Questionable code, I know, but this is the easiest solution
const PostList = () => {
  const posts = useSelector(state => state.posts)
  return (
    <div className="postCollection">
      {
        posts.map(post => {
          const postBody = post.content.substring(0, PREVIEW_LENGTH)
          return(
            <div className="postBody" key={post.id} >
              <h3>{post.title}</h3>
              <p>{postBody.substring(1)}... <Link to={`/posts/${post.id}`}>show more</Link></p>
            </div>
          )
        } )
      }
    </div>
  )
}

export default PostList
