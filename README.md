# Weather App — Node.js + Express + Open-Meteo API

## 📌 Project Overview

This is a simple weather web application built using Node.js, Express, and EJS.
Users can enter a city name, and the app fetches real-time weather data using the Open-Meteo API.

The application performs:
• City name → geographic coordinates (geocoding)
• Coordinates → live weather data
• Displays temperature and wind speed

The goal of this project is to practice API integration, server-side rendering, and Express routing.

---

## ⚙ Technologies Used

• Node.js
• Express.js
• Axios
• EJS templating
• Bootstrap (UI styling)
• Open-Meteo API

---

## 📁 Project Structure

weather-app/
│
├── public/
│   ├── styles/
│   │   └── main.css
│   └── images/
│
├── views/
│   └── index.ejs
│
├── index.js
├── package.json
└── readme.txt

---

## 🚀 Installation & Setup

1. Install Node.js if not already installed.

2. Open terminal inside the project folder.

3. Install dependencies:
   npm install

4. Start the server:
   node index.js

5. Open browser:
   http://localhost:3000

---

## 🧠 How It Works

1. User enters a city name.
2. Server sends request to Open-Meteo Geocoding API.
3. API returns latitude & longitude.
4. Server fetches weather using coordinates.
5. Results are rendered on the webpage.

---

## ✨ Features

✔ City search
✔ Live temperature display
✔ Wind speed display
✔ Clean responsive UI
✔ Error handling for invalid cities

---

## 🔮 Future Improvements

• Weather icons
• Forecast display
• Location auto-detect
• Dark/light theme
• Animated UI

---

## 👨‍💻 Author

Mitesh Chandel
Weather App Project — Learning Backend Development

---
