const ul = document.querySelector("ul");

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    
    jsonData.forEach(country => {
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

fetchCountries()