import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost/api/weather',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCurrentWeather(city) {
      return apiClient.get('/current?place=' + city)
    },
    getForecast(city, cnt) {
      return apiClient.get('/forecast?place=' + city + ' &cnt=' +cnt)
    },
}