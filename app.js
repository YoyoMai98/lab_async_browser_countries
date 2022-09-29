const ul = document.querySelector("ul");

const createCountryList = countries => {
    countries.forEach(country => {
        const listItem = document.createElement("li");

        const flag = country.flag;

        const span1 = document.createElement("span");
        span1.innerText = flag;
        span1.className = "flag";

        const name = country.name;

        const span2 = document.createElement("span");
        span2.innerText = name.common;

        listItem.appendChild(span1);
        listItem.appendChild(span2);
        ul.appendChild(listItem);
    })
}

const calculatePopulation = countriesPopulation => {
    return countriesPopulation.reduce((reducer, population) => reducer + population, 0);
}

const displayPopulation = totalPopulation => {
    const heading = document.querySelector("h2");
    const text = "Total Population: " + totalPopulation
    heading.innerText = text;
}

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    
    createCountryList(jsonData);

    const countriesPopulation = jsonData.map(country => country.population).flat();
    const totalPopulation = calculatePopulation(countriesPopulation);
    displayPopulation(totalPopulation);
}

fetchCountries();