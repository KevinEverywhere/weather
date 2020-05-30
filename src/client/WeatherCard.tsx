import React, { useState, ChangeEvent } from 'react'
import './app.css'
import { Weather } from './App'

type Props = {
  result: Weather
}

export default function WeatherCard(props: Props) {
  const { result }  = props

  return (
    <div className="weatherCard">
      <div style={{ textSize: 18 }}>{result.name}</div>

      <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} />
      
      <div style={{ textSize: 12 }}>{result.weather[0].main}</div>

      <div style={{ marginTop: 8, textSize: 24 }}>{result.main.temp}° K</div>
    </div>
  )
}
