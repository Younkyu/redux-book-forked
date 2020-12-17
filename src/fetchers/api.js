import axios from 'axios'

export default class Api {
  constructor() {
    this.axiosInstance = axios.create()
    // { baseurl 여기서 설정
    // 	baseURL: `${process.env.APIS_HOST}`
    // }
  }

  async get(url, params) {
    const config = {
      url,
      method: 'get',
      params
    }

    return await this.request(config)
  }

  async post(url, data) {
    const config = {
      url,
      method: 'post',
      data
    }

    return await this.request(config)
  }

  async put(url, data) {
    const config = {
      url,
      method: 'put',
      data
    }

    return await this.request(config)
  }

  async delete(url) {
    const config = {
      url,
      method: 'delete'
    }

    return await this.request(config)
  }

  async request(config) {
    try {
      const response = await this.axiosInstance.request(config)
      return response.data
    } catch (e) {}
  }
}
