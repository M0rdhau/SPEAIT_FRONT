import React from 'react'
import postService from '../services/posts'
import { useSelector } from 'react-redux'
import { useField } from '../hooks'
import marked from 'marked'

const PostForm = () => {
  const userInfo = useSelector(state => state.user)

  const content = useField('content')
  const title = useField('title')
  let author = ''
  if(userInfo.username) { author = userInfo.username }

  const publishPost = (event) => {
    event.preventDefault()
    const contentValue = content.value
    const titleValue = title.value
    // const author = userInfo.username
    const userToken = userInfo.token
    content.clear()
    title.clear()
    const postToCreate = {
      content: contentValue,
      title: titleValue,
      author
    }
    postService.setToken(userToken)
    postService.createPost(postToCreate)
  }

  return (
    <div>
      <form className="postForm" onSubmit={publishPost} >
        <input name='title' onChange={title.onChange}/>
        <textarea name='posttext' onChange={content.onChange}/>
        <button type='submit'> Publish! </button>
      </form>
      <div className="postTitles">
        <h2>{title.value}</h2>
        <h3><em>By: {author}</em></h3>
      </div>
      <div dangerouslySetInnerHTML={ { __html: marked(content.value) } } ></div>
    </div>
  )
}

export default PostForm
