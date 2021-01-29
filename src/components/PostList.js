import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

const PostList = () => {
  const posts = useSelector(state => state.posts)
  return (
    <ul>
      {
        posts.map(post =>
          <Post key = {post.id} post ={post}/>
        )
      }
    </ul>
  )
}

export default PostList
