// fetch("https://pokeapi.co/api/v2/pokemon/pikachu" )
// .then(response => {
//     if(!response.ok) {
//         throw new Error('Could not fetch Pokemon data');
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error('Error fetching data:', error));

console.log('This will log before the data is fetched');

async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        const pokemonAffinity = data.types[0].type.name;
        const pokemonElement = document.getElementById("pokemonAffinity");

        const pokemonHeight = data.height;
        const pokemonHeightElement = document.getElementById("pokemonHeight");

        const pokemonWeight = data.weight;
        const pokemonWeightElement = document.getElementById("pokemonWeight");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
        pokemonElement.textContent = "Element: " +  pokemonAffinity;
        pokemonElement.style.display = "block";

        pokemonHeightElement.textContent = "Height: " +  pokemonHeight;
        pokemonHeightElement.style.display = "block";

        pokemonWeightElement.textContent = "Weight: " +  pokemonWeight;
        pokemonWeightElement.style.display = "block";

        const background = document.getElementById("background");
        
        if (pokemonAffinity === "fire") {
            background.style.backgroundColor = "red";
        }else if (pokemonAffinity === "water") {
            background.style.backgroundColor = "blue";
        }else if (pokemonAffinity === "grass") {
            background.style.backgroundColor = "green";
        }else if (pokemonAffinity === "electric") {
            background.style.backgroundColor = "yellow";
        }else if (pokemonAffinity === "psychic") {
            background.style.backgroundColor = "purple";
        }else if (pokemonAffinity === "ice") {
            background.style.backgroundColor = "lightblue";
        }else if (pokemonAffinity === "dragon") {
            background.style.backgroundColor = "orange";
        }else if (pokemonAffinity === "dark") {
            background.style.backgroundColor = "gray";
        }else if (pokemonAffinity === "fairy") {
            background.style.backgroundColor = "pink";
        }else{
            background.style.backgroundColor = "white";
        }


    }
    catch(error){
        console.error(error);
    }
}
    
