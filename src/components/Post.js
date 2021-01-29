import React from 'react'

const Post = ({ post } ) => {
  console.log('post is being shown')
  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <p>
        {post.content}
      </p>
    </div>
  )
}

export default Post
