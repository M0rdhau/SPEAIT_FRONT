import React from 'react'
import postService from '../services/posts'
import { useSelector } from 'react-redux'

const PostForm = () => {
  const userInfo = useSelector(state => state.user)

  const publishPost = (event) => {
    event.preventDefault()
    const content = event.target.posttext.value
    const title = event.target.title.value
    const author = userInfo.username
    const userToken = userInfo.token
    event.target.title.value = ''
    event.target.posttext.value = ''
    const postToCreate = {
      content,
      title,
      author
    }
    postService.setToken(userToken)
    postService.createPost(postToCreate)
  }

  return (
    <div>
      <form className="postForm" onSubmit={publishPost} >
        <input name='title' />
        <textarea name='posttext' />
        <button type='submit'> Publish! </button>
      </form>
    </div>
  )
}

export default PostForm
