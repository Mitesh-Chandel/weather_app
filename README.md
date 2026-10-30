# Atmos Weather

A responsive weather dashboard built with Node.js, Express, EJS, and the Open-Meteo APIs. Search for a city or use your browser's current location to see live conditions, weather highlights, hourly forecasts, and a five-day outlook.

## Features

- City search with Enter-key support and clear invalid-city/API error states
- Optional current-location weather using browser geolocation
- Live temperature, apparent temperature, humidity, wind and gusts, pressure, cloud cover, and precipitation
- Daily high/low temperatures, sunrise/sunset, UV index, and precipitation probability
- Hourly temperature and precipitation probability plus a five-day forecast
- Responsive glass-inspired layout, weather-based hero colors, and persistent light/dark theme
- Open-Meteo values and units are used directly; unsupported fields such as visibility are not fabricated or displayed

## Requirements

- Node.js 18 or later
- npm

## Run locally

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Set the `PORT` environment variable to change the server port. Browser geolocation requires a secure context (HTTPS) or localhost and user permission.

## Data sources

- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) resolves city names into coordinates and place details.
- [Open-Meteo Forecast API](https://open-meteo.com/en/docs) provides current, hourly, and daily weather data for those coordinates.

The app does not require an API key. Units are supplied by Open-Meteo's response and the forecast timezone is automatically selected for the requested coordinates.
