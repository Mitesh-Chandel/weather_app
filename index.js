//   https://api.open-meteo.com/v1/forecast?latitude=23.03&longitude=72.58&current=temperature_2m
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://geocoding-api.open-meteo.com/v1/search?name=";
const remapi = "&count=1&language=en";

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
 
app.get("/", (req, res) => {  
  res.render("index.ejs");
});   
   
app.post("/search", async (req, res) => {
  try {
    const cityname1 = req.body.city;
   //  console.log("cityname:" + cityname1); 
    const response = await axios.get(
      API_URL + encodeURIComponent(cityname1) + remapi,
    );
    if (!response.data.results || response.data.results.length === 0) { 
      return res.render("index.ejs", {
        data: "City not found ❌",
      });   
    }
    const result = response.data.results;  
    // console.log(result);
    const place = response.data.results[0];

    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,wind_speed_10m`;

    const weather = await axios.get(weatherURL);

    const temp = weather.data.current.temperature_2m;
    const wind = weather.data.current.wind_speed_10m;

    res.render("index.ejs", {
      
      data:`City:${place.name}`,
      data1:`Temperature:${temp}`,
      data2:`Wind:${wind}` 
    });
  } catch (error) {  
    res.render("index.ejs", { 
      data: error.message, 
    });
  }  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
             