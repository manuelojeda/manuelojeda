// eslint-disable-next-line no-unused-vars
import axios, { AxiosResponse } from 'axios'

async function updateEducation (): Promise<any> {
  try {
    const response: AxiosResponse = await axios({
      url: '/admin/updateEducation',
      method: 'post'
    })

    return response
  } catch (error) {
    return null
  }
}

export default updateEducation
