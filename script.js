// Variables
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

// Fonction pour récupérer les données météo
const fetchWeather = async () => {
    const city = cityInput.value;
    if (!city) {
        alert("Veuillez entrer une ville !");
        return;
    }

    const apiKey = "2897df3008b6a5a99dab5fbd72c99456"; 
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("Ville introuvable");

        const data = await response.json();

        // Mettre à jour le contenu HTML
        cityName.textContent = `Ville : ${data.name}`;
        temperature.textContent = `Température : ${data.main.temp}°C`;
        description.textContent = `Description : ${data.weather[0].description}`;
    } catch (error) {
        alert(error.message);
    }
};

// Écouteur d'événement pour le bouton de recherche
searchBtn.addEventListener('click', fetchWeather);
