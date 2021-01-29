import postService from '../services/posts'

const postReducer = (state = [], action) => {
  switch (action.type)  {
    case 'POSTS_INIT':
      return action.data
    case 'CREATE':
      return [...state, action.postToAdd]
    case 'DELETE':
      return state.filter(blog => action.id !== blog.id)
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

export default postReducer
