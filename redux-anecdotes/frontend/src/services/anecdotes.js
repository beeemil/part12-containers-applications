import axios from '../utils/apiClient'
const getAll = async () => {
  const response = await axios.get('/')
  return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post('/', object)
    return response.data
}

const update = async (object) => {
    const response = await axios.put(`/${object.id}`,object)
    return response.data
}

export default { getAll, createNew, update }