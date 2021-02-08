import React from 'react'
import postService from '../services/posts'
import { useSelector } from 'react-redux'
import { useField } from '../hooks'
import marked from 'marked'

const PostForm = () => {
  const userInfo = useSelector(state => state.user)
  const postTitle = useField('postTitle')
  const postBody = useField('postBody')

  const publishPost = (event) => {
    event.preventDefault()
    const content = postBody.value
    const title = postTitle.value
    const author = userInfo.username
    const userToken = userInfo.token
    postTitle.clear()
    postBody.clear()
    const postToCreate = {
      content,
      title,
      author
    }
    postService.setToken(userToken)
    postService.createPost(postToCreate)
  }

  const styleElem = {
    'width': '60%'
  }

  return (
    <div style={styleElem} >
      <form className="postForm" onSubmit={publishPost} >
        <input name='title' value={postTitle.value} onChange={postTitle.onChange} />
        <textarea name='posttext' value={postBody.value} onChange={postBody.onChange} />
        <button type='submit'> Publish! </button>
      </form>
      <div style={{ 'max-width': '100%', width: '100%' }} dangerouslySetInnerHTML={{ __html: marked(postBody.value) }} />
    </div>
  )
}

export default PostForm
