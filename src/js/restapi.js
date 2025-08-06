const loadCountryAPI = () => {
    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML =  countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(``);

}

function getCountry(country) {
    return `
        <div class="bg-gray-300 rounded-xl p-4">
            <img src="${country.flags.png}" alt="${country.flags.alt}" class="w-full h-36">
            <div class="flex flex-col items-center gap-1 mt-1">
                <h2 class="text-2xl">${country.name.common}</h2>
                <p>Capital ${country.capital}</p>
                <p class="text-base text-gray-500">Poblacion: <span class="text-lg font-semibold text-cyan-700">${country.population} </span> </p>
                <p class="text-base text-gray-500">Region: <span class="text-lg font-semibold text-cyan-700">${country.region} </span> </p>
                <a class="text-base font-bold underline text-gray-500" href="${country.maps.googleMaps}" target="_blank">Ubicación</a>
            </div>
        </div>
    `
}

loadCountryAPI();