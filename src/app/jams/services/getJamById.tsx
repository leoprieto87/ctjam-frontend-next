import api from '../../../contexts/_api'

export async function getJamById(userId: string) {
  const response = await api.get(`/jams/${userId}`)
  const jamData = response.data

  return jamData
}
