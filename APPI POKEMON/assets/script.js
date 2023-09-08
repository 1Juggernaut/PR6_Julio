let urlApi = "https://rickandmortyapi.com/api/character";

fetch(urlApi)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let Divgrilla = document.querySelector("#divgrilla");
    data.results.forEach((personaje) => {
      Divgrilla.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <ul class="list-group">
                    <li class="list-group-item">${personaje.gender}</li>
                    <li class="list-group-item">${personaje.status}</li>
                    <li class="list-group-item">${personaje.species}</li>
                </ul>       
            </div>
        </div>
    </div>
`;
    });
  });
