let ApiUrlPokemon = 'https://pokeapi.co/api/v2/pokemon'

let APipokeespañol = "https://pokeapi.co/api/v2/language/7/"

fetch(ApiUrlPokemon)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let spacepok = document.querySelector("#Divgrillapok")
        data.results.forEach(Pokemon => {
            spacepok.innerHTML = `
            <div class="col">
        <div class="card">
            <img src="${Pokemon.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${Pokemon.name}</h5>
                <ul class="list-group">
                </ul>       
            </div>
        </div>
    </div>
            `
        });


        fetch(APipokeespañol)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)



            })
    })