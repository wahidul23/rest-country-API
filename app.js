fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => showCountries(data));

const showCountries = countries => {
    
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const info = `
        <h3 class = "countryName">${country.name}</h3>
        <p class ="capitalName">${country.capital}</p>
        <button class = "detailsBtn" onclick = "showDetails('${country.name}')">View Details</button>
        `;
        countryDiv.innerHTML = info;
        countriesDiv.appendChild(countryDiv); 
    });
}

const showDetails = name =>{
     const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showClicked(data[0]));
}

const showClicked = country => {
    const detail = document.getElementById('countryDetail');
    detail.innerHTML = `
    <h1>${country.name}</h1>
    <h3>${country.capital}</h3>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}">
    `;

}