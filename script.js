// Define Weather API URL
const apiUrl = "https://api.open-meteo.com/v1/dwd-icon?latitude=51.4552&longitude=-2.5966&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure&hourly=temperature_2m";

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

 /*######################################################

 In order to make this weather app adaptable to different locations you will need to use
 a location api to retreive lattitude and longitude. Then you would need to pass this 
 locations information into the weather api call as arguments in order to get the local
 weather imformation.

 #######################################################*/