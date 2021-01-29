import React from 'react'
import { useDispatch } from 'react-redux'
import { commentPost } from '../reducers/postReducer'

const Post = ({ post } ) => {

  const dispatch = useDispatch()

  const putComment = async (event) => {
    event.preventDefault()
    const text = event.target.comment.value
    const commentAuthor = event.target.author.value
    event.target.comment.value = ''
    dispatch(commentPost(post, { text, commentAuthor }))
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <p>
        {post.content}
      </p>
      <ul>
        {
          post.comments.map(comment =>
            <li key={comment.id}>
              {comment.data}
            </li>
          )
        }
      </ul>
      <form onSubmit={ putComment } >
        <div><input name='author'/></div>
        <div><textarea name='comment' /></div>
        <button type='submit'> Comment </button>
      </form>
    </div>
  )
}

export default Post
