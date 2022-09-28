const ul = document.querySelector("ul");

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    
    const countriesNames = jsonData.map( country => country.name).flat();
    
    countriesNames.forEach(countryName => {
        const listItem = document.createElement("li");
        listItem.innerText = countryName.common;
        ul.appendChild(listItem);
    })
}

fetchCountries()