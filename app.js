const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";


console.log(URL_API);


fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;

    for (let character of characters) {
      console.log(characters);

      $container.innerHTML += `
  <section class="card">
  <h2 class="name">${character.name} </h2>
  <img class="imagen" src="${character.image} " alt="imagen de ${character.name}">
  <h3 class="gender">Gender: ${character.gender} </h3>
  <h3 class="species">Species: ${character.species} </h3>
  <h3 class="status">Status: ${character.status} </h3>
  </section>
  `
    }
  });



