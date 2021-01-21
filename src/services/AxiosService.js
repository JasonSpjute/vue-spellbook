import Axios from 'axios'

export const dndApi = Axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/spells',
  timeout: 8000
})

export const sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jason/spells'
})

export const setBearer = function(bearer) {
  sandboxApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  sandboxApi.defaults.headers.authorization = ''
}
