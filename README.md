# 🌤️ Atmos Weather

A modern, responsive weather dashboard built with **Node.js, Express.js, and EJS**, powered by the Open-Meteo APIs.

Atmos Weather provides real-time weather information through a clean, glass-inspired interface with dynamic weather backgrounds, interactive forecasts, and light/dark themes.

Search for any city or use your current location to explore detailed weather conditions and forecasts.

## ✨ Features

- 🔍 **City Search** – Search for cities with Enter-key support and proper error handling.
- 📍 **Current Location** – Get local weather using browser geolocation.
- 🌡️ **Live Weather Conditions** – View current temperature, feels-like temperature, and weather descriptions.
- 💨 **Weather Highlights** – Detailed information about humidity, wind speed, wind gusts, atmospheric pressure, cloud cover, and precipitation.
- ☀️ **Daily Weather Details** – Explore daily high/low temperatures, sunrise, sunset, UV index, and precipitation probability.
- 🕒 **Hourly Forecast** – View upcoming hourly temperatures and precipitation probabilities.
- 📅 **5-Day Forecast** – Check upcoming weather conditions and temperature variations.
- 🌗 **Dark & Light Mode** – Switch between themes with persistent preferences.
- 🎨 **Dynamic Weather UI** – Weather-based backgrounds and a modern glass-inspired design.
- 📱 **Responsive Design** – Optimized for desktop, tablet, and mobile devices.
- ⚡ **Live API Data** – Uses actual Open-Meteo response values without fabricating unsupported weather information.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend web framework |
| EJS | Server-side templating |
| HTML5 | Application structure |
| CSS3 | Styling, layouts, and animations |
| JavaScript | Frontend interactions and functionality |
| Open-Meteo APIs | Weather and geocoding data |

## 📸 Screenshots

<!-- Add your application screenshots here -->

<!-- Example:
![Atmos Weather Dashboard](screenshots/dashboard.png)
-->

## 🚀 Getting Started

Follow these steps to run Atmos Weather locally.

### Prerequisites

- Node.js 18 or later
- npm

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

**2. Navigate to the project directory**

```bash
cd YOUR-REPOSITORY
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the application**

```bash
npm start
```

**5. Open in your browser**

```text
http://localhost:3000
```

To use a different port, set the `PORT` environment variable.

## 🌐 API & Data Sources

Atmos Weather uses free Open-Meteo APIs and does not require an API key.

**1. Geocoding API**

[Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)

Used to:
- Convert city names into geographical coordinates.
- Retrieve location details such as city and country.

**2. Forecast API**

[Open-Meteo Forecast API](https://open-meteo.com/en/docs)

Used to retrieve:
- Current weather conditions.
- Hourly weather forecasts.
- Daily weather forecasts.
- Temperature and apparent temperature.
- Humidity, wind, pressure, and cloud cover.
- Sunrise, sunset, UV index, and precipitation information.

Weather units and forecast timezone are taken from the API response and the requested location.

## 📍 Location Access

The application supports browser-based geolocation.

- Location permission is requested through the browser.
- Geolocation requires HTTPS or localhost.
- Users can search for cities without enabling location access.

## 💡 Key Highlights

- No API key required.
- Real-time weather data.
- Dynamic and responsive user interface.
- Persistent theme preferences.
- Graceful API and location error handling.
- Clean separation between backend and frontend functionality.

## 🔮 Future Improvements

Potential enhancements for future versions:

- Weather maps and radar visualization.
- More detailed historical weather information.
- Air quality information.
- Saved favorite cities.
- Weather alerts and notifications.

## 👨‍💻 Author

**Mitesh Chandel**

Computer Engineering Student | Full-Stack Web Developer

- GitHub: [Mitesh-Chandel](https://github.com/Mitesh-Chandel)
- Portfolio: [Visit My Portfolio](https://mitesh-chandel.github.io/)

## 📄 License

This project is open-source and available for educational and personal use.

---

⭐ If you find this project useful, consider giving it a star!
