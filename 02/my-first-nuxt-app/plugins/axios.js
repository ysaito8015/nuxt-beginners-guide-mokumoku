export default function({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.API_KEY) {
      config.headers.common['Authorization'] = 'Bearer ' + process.env.API_KEY
    }
    return config
  })
}
