import axios from 'axios'

const baseUrl = '/api/posts'
let token = null

const setToken = (userToken) => {
  token = `bearer ${userToken}`
}

const createPost = async newPost => {
  const config = { headers: { Authorization: token } }
  const response = await axios.post(baseUrl, newPost, config)
  return response.data
}

// const deletePost = async postId => {
//   const response = await axios.delete(`${baseUrl}/${postId}`)
//   return response.data
// }

const getAll = async () => {
  const response  = await axios.get(baseUrl)
  return response.data
}

const comment = async (post, comment) => {
  const response = await axios.post(`${baseUrl}/${post.id}/comments`, comment)
  return response.data
}

export default { getAll, createPost, comment, setToken }

