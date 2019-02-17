const express = require('express')
const cors = require('cors')
const app = express();
app.listen(5050, () => {
  console.log('服务器启动成功！')
})


app.use(cors({
  origin: ['http://127.0.0.1:8080'],
  credentials: true
}))

//天气状态码,weatherCode:0,1,2,3   0:晴，1：多云，2：雨，3：雪
app.get('/weatherList', (req, res) => {
  var currentTime = new Date();
  var dataList = {
    dayDetail: [{
        date: currentTime.toLocaleDateString(),
        dayWeather: 0,
        nightWeather: 1,
        maxTemp: 10,
        minTemp: -6
      },
      {
        date: new Date(currentTime.getTime() + 1000 * 60 * 60 * 24).toLocaleDateString(),
        dayWeather: 1,
        nightWeather: 2,
        maxTemp: 15,
        minTemp: 0
      },
      {
        date: new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 2).toLocaleDateString(),
        dayWeather: 2,
        nightWeather: 3,
        maxTemp: 18,
        minTemp: -3
      },
      {
        date: new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 3).toLocaleDateString(),
        dayWeather: 3,
        nightWeather: 0,
        maxTemp: 6,
        minTemp: -13
      },
      {
        date: new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 4).toLocaleDateString(),
        dayWeather: 0,
        nightWeather: 1,
        maxTemp: 13,
        minTemp: -18
      },
      {
        date: new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 5).toLocaleDateString(),
        dayWeather: 1,
        nightWeather: 2,
        maxTemp: 5,
        minTemp: -7
      },
      {
        date: new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 6).toLocaleDateString(),
        dayWeather: 2,
        nightWeather: 3,
        maxTemp: 3,
        minTemp: -6
      }
    ],
    hoursDetail: [{
        hours: currentTime.getHours(),
        weather: 3,
        temp: 7
      },
      {
        hours: currentTime.getHours() + 1,
        weather: 1,
        temp: 8
      },
      {
        hours: currentTime.getHours() + 2,
        weather: 2,
        temp: 8
      },
      {
        hours: currentTime.getHours() + 3,
        weather: 3,
        temp: 9
      },
      {
        hours: currentTime.getHours() + 4,
        weather: 0,
        temp: 10
      },
      {
        hours: currentTime.getHours() + 5,
        weather: 1,
        temp: 10
      },
      {
        hours: currentTime.getHours() + 6,
        weather: 2,
        temp: 10
      },
      {
        hours: currentTime.getHours() + 7,
        weather: 3,
        temp: 9
      },
      {
        hours: currentTime.getHours() + 8,
        weather: 0,
        temp: 8
      },
      {
        hours: currentTime.getHours() + 9,
        weather: 1,
        temp: 7
      },
      {
        hours: currentTime.getHours() + 10,
        weather: 2,
        temp: 5
      },
      {
        hours: currentTime.getHours() + 11,
        weather: 3,
        temp: 2
      },
      {
        hours: currentTime.getHours() + 12,
        weather: 0,
        temp: 2
      },
      {
        hours: currentTime.getHours() + 13,
        weather: 1,
        temp: 1
      },
      {
        hours: currentTime.getHours() + 14,
        weather: 2,
        temp: -1
      },
      {
        hours: currentTime.getHours() + 15,
        weather: 3,
        temp: -1
      },
      {
        hours: currentTime.getHours() + 16,
        weather: 0,
        temp: -5
      },
      {
        hours: currentTime.getHours() + 17,
        weather: 1,
        temp: -5
      },
      {
        hours: currentTime.getHours() + 18,
        weather: 2,
        temp: -4
      },
      {
        hours: currentTime.getHours() + 19,
        weather: 3,
        temp: -3
      },
      {
        hours: currentTime.getHours() + 20,
        weather: 0,
        temp: -2
      },
      {
        hours: currentTime.getHours() + 21,
        weather: 1,
        temp: 2
      },
      {
        hours: currentTime.getHours() + 22,
        weather: 2,
        temp: 3
      },
      {
        hours: currentTime.getHours() + 23,
        weather: 3,
        temp: 3
      }
    ],

    wetness: 35,
    updateTime: 8,
    airQuality: 64,
    area: '神木县东兴街中段',
    warning: '道路结冰黄色预警信号'
  }
  res.send(dataList)
})