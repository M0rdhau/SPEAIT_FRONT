import React from 'react'
import { useDispatch } from 'react-redux'
import { commentPost } from '../reducers/postReducer'
import marked from 'marked'

const Post = ({ post } ) => {
  const dispatch = useDispatch()

  const putComment = async (event) => {
    event.preventDefault()
    const text = event.target.comment.value
    const author = event.target.author.value
    event.target.comment.value = ''
    dispatch(commentPost(post, { text, author }))
  }


  if(post !== undefined){
    console.log(post.comments)
    return (
      <div className="postBody">
        <div className="postTitles">
          <h2>{post.title}</h2>
          <h3><em>By: {post.author}</em></h3>
        </div>
        <div className="postContent" dangerouslySetInnerHTML={{ __html: marked(post.content) }}/>
        <div className="postComments">
          {
            post.comments.map(comment =>
              <div className="commentBody" key={comment.id}>
                <p className="commentAuthor"> {comment.author} Says: </p>
                <p className="commentText" key={comment.id}>
                  {comment.text}
                </p>
              </div>
            )
          }
        </div>
        <form className="postForm" onSubmit={ putComment } >
          Your name: <br/> <input name='author'/>
          Comment: <br/><textarea name='comment' />
          <button type='submit'> Comment </button>
        </form>
      </div>
    )
  }else{
    return(
      <div >
        <img className="loadingImage" src='https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg' />
      </div>
    )
  }

}

export default Post
