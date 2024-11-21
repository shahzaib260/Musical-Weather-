const apiKey = "10ab39613614bdd58c0a4d4ac9997252";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".icon")



async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
document.querySelector(".city").innerHTML = data.name + " " + "(" + data.sys.country + ")"
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C" 
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
document.querySelector(".cond").innerHTML = data.weather[0].main

if(data.weather[0].main == "Clear"){
    weatherIcon.src = "clear.png"
}

else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png"
}

else if(data.weather[0].main == "Clouds"){
weatherIcon.src = "clouds.png"
}
else if(data.weather[0].main == "Smoke"){
    weatherIcon.src = "smoke.png"
    }

    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "haze.png"
        }










        const weatherToPlaylist = {
            Haze: [
              { name: "Dhundhala by Yashraj", link: "https://open.spotify.com/track/5XseQZ9TGr06Rv1Ye6wCu0?si=3fe65c6de7e24552" },
              { name: "Winter Ayun Waliye by Arjuna, Jyotica, Geet", link: "https://open.spotify.com/track/3FYjZNnS8Qck6p8MaBt8JN" },
              { name: "Jhol by Annural Khalid, Maanu", link: "https://open.spotify.com/track/1E9ZGkxvJ04fGCC3z0I5KH" },
              { name: "2 Minutes//Smog City by Maanu", link: "https://open.spotify.com/track/2nm8qZvJwIsudW5eKS6pUB?si=5ba32dc7fe87443b" },
            ],
            Clouds: [
              { name: "Rainy Night in Georgia", link: "https://open.spotify.com/track/5TjloQCkbvl1HvqFFjEyT6" },
              { name: "Raindrops Keep Falling on My Head", link: "https://open.spotify.com/track/1kNmzOWM3xmEnL2xyGs5ok" },
              { name: "Set Fire to the Rain", link: "https://open.spotify.com/track/5I9PywAvcCkqsFP4wY8xir" },
              { name: "Set Fire to the Rain", link: "https://open.spotify.com/track/5I9PywAvcCkqsFP4wY8xir" },
            ],
            Smoke: [
              { name: "Let It Snow! Let It Snow! Let It Snow!", link: "https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp" },
              { name: "White Winter Hymnal", link: "https://open.spotify.com/track/2h9KD4qH76GE1UEifHKhRm" },
              { name: "Do You Want to Build a Snowman?", link: "https://open.spotify.com/track/2VQE6YhTFf6NVdUaNdU5u3" },
            ],
            Clear: [
                { name: "Let It Snow! Let It Snow! Let It Snow!", link: "https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp" },
              { name: "White Winter Hymnal", link: "https://open.spotify.com/track/2h9KD4qH76GE1UEifHKhRm" },
              { name: "Do You Want to Build a Snowman?", link: "https://open.spotify.com/track/2VQE6YhTFf6NVdUaNdU5u3" },
            ]
            ,
            Mist: [
                { name: "Let It Snow! Let It Snow! Let It Snow!", link: "https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp" },
              { name: "White Winter Hymnal", link: "https://open.spotify.com/track/2h9KD4qH76GE1UEifHKhRm" },
              { name: "Do You Want to Build a Snowman?", link: "https://open.spotify.com/track/2VQE6YhTFf6NVdUaNdU5u3" },
            ],
            Drizzle: [
                { name: "Let It Snow! Let It Snow! Let It Snow!", link: "https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp" },
              { name: "White Winter Hymnal", link: "https://open.spotify.com/track/2h9KD4qH76GE1UEifHKhRm" },
              { name: "Do You Want to Build a Snowman?", link: "https://open.spotify.com/track/2VQE6YhTFf6NVdUaNdU5u3" },
            ],
            Rain: [
                { name: "Barsaat by Darshan Raval", link: "https://open.spotify.com/track/7tXd4sxM1v18eV71iz7B6e?si=96ed1c75c32142b6" },
              { name: "Barsaaton Mein by Darshan Raval", link: "https://open.spotify.com/track/7doebiokA0utWXWcw7rD82?si=03ac6c280ed147b2" },
              { name: "Baarishein by Atif Aslam", link: "https://open.spotify.com/track/4orEOb27nON0TWsHvlVAxb?si=6095105efd2f4b6b" },
              { name: "Baarish by Bilal Saeed", link: "https://open.spotify.com/album/2F1xli42AUd4KDEIuD3re7?si=0ba0bc16e9cc4ada" },
              { name: "Baarish by Sajjad Ali", link: "https://open.spotify.com/track/4orEOb27nON0TWsHvlVAxb?si=6095105efd2f4b6b" },
            ]
            
          };
          
          function suggestRandomSong(weather) {
            const playlist = weatherToPlaylist[weather];
            if (playlist && playlist.length > 0) {
              const randomIndex = Math.floor(Math.random() * playlist.length);
              const song = playlist[randomIndex];
              document.getElementById("current-weather").textContent = weather;
              document.getElementById("song-link").textContent = song.name;
              document.getElementById("song-link").href = song.link;
            } else {
              document.getElementById("current-weather").textContent = "Unknown";
              document.getElementById("song-link").textContent = "No song available";
              document.getElementById("song-link").href = "#";
            }
          }
          
          // Example usage
          suggestRandomSong(data.weather[0].main); // Change to the current weather condition to tes









}
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})


