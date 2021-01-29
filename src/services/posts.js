import axios from 'axios'
const baseUrl = 'http://localhost:3000/posts'

const createPost = async newPost => {
  const response = await axios.post(baseUrl, newPost)
  return response.data
}

const deletePost = async postId => {
  const response = await axios.delete(`${baseUrl}/${postId}`)
  return response.data
}

const getAll = async () => {
  const response  = await axios.get(baseUrl)
  return response.data
}

const comment = async (post, comment) => {
  const commentedPost = { ...post, comments: [ ...post.comments, comment ] }
  const response = await axios.put(`${baseUrl}/${post.id}`, commentedPost)
  return response.data
}

export default { getAll, createPost, deletePost, comment }

