import postService from '../services/posts'

const generateId = () => {
  return Math.floor(Math.random()*100000)
}

const postReducer = (state = [], action) => {
  switch (action.type)  {
    case 'POSTS_INIT':
      return action.data
    case 'CREATE':
      return [...state, action.postToAdd]
    case 'DELETE':
      return state.filter(blog => action.id !== blog.id)
    case 'UPDATE':
      return state.map(post => action.newPost.id !== post.id ? post : action.newPost)
    default:
      return state
  }
}

export const createPost = (post) => {
  return async dispatch => {
    const postToAdd = await postService.createPost(post)
    dispatch({
      type: 'CREATE',
      postToAdd
    })
  }
}

export const deletePost = (id) => {
  return async dispatch => {
    await postService.deletePost(id)
    dispatch({
      type: 'DELETE',
      id
    })
  }
}

export const initPosts = () => {
  return async dispatch => {
    const data = await postService.getAll()
    dispatch({
      type: 'POSTS_INIT',
      data
    })
  }
}

export const commentPost = (post, text) => {
  return async dispatch => {
    const comment = {
      id: generateId(),
      data: text
    }
    const newPost = await postService.comment(post, comment)
    dispatch({
      type: 'UPDATE',
      newPost
    })
  }
}

export default postReducer
