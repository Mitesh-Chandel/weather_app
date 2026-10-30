import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

async function getWeather(latitude, longitude) {
  const response = await axios.get(FORECAST_URL, {
    params: {
      latitude,
      longitude,
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "is_day",
        "precipitation",
        "rain",
        "showers",
        "snowfall",
        "weather_code",
        "cloud_cover",
        "pressure_msl",
        "surface_pressure",
        "wind_speed_10m",
        "wind_direction_10m",
        "wind_gusts_10m",
      ].join(","),
      hourly: "temperature_2m,precipitation_probability,weather_code",
      daily: [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "sunrise",
        "sunset",
        "uv_index_max",
        "precipitation_probability_max",
      ].join(","),
      forecast_days: 5,
      timezone: "auto",
    },
    timeout: 10000,
  });
  return response.data;
}

function renderHome(res, { place = null, weather = null, error = null, search = "" } = {}, status = 200) {
  return res.status(status).render("index", { place, weather, error, search });
}

app.get("/", (_req, res) => {
  renderHome(res);
});

app.post("/search", async (req, res) => {
  const city = typeof req.body.city === "string" ? req.body.city.trim() : "";
  if (!city) {
    return renderHome(res, { error: "Enter a city name to search.", search: city }, 400);
  }

  try {
    const response = await axios.get(GEOCODING_URL, {
      params: { name: city, count: 1, language: "en", format: "json" },
      timeout: 10000,
    });
    const place = response.data.results?.[0];
    if (!place) {
      return renderHome(res, { error: `We couldn't find “${city}”. Check the spelling and try again.`, search: city }, 404);
    }

    const weather = await getWeather(place.latitude, place.longitude);
    return renderHome(res, { place, weather, search: city });
  } catch (error) {
    console.error("Weather search failed:", error.message);
    return renderHome(res, {
      error: "Weather data is temporarily unavailable. Please try again in a moment.",
      search: city,
    }, 502);
  }
});

app.post("/location", async (req, res) => {
  const latitude = Number(req.body.latitude);
  const longitude = Number(req.body.longitude);
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90
    || !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
    return renderHome(res, { error: "Your location could not be read. Please allow location access and try again." }, 400);
  }

  try {
    const weather = await getWeather(latitude, longitude);
    return renderHome(res, {
      place: {
        name: "Your location",
        latitude: weather.latitude,
        longitude: weather.longitude,
        timezone: weather.timezone,
      },
      weather,
    });
  } catch (error) {
    console.error("Weather lookup for current location failed:", error.message);
    return renderHome(res, {
      error: "Weather data is temporarily unavailable. Please try again in a moment.",
    }, 502);
  }
});

app.listen(port, () => {
  console.log(`Weather App is running at http://localhost:${port}`);
});
