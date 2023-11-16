let apiKey = "e62f099aa015b1afedfca7df020f6e6b";


let detallep = document.querySelector(".sectiondetalle")
let qs = location.search;
let Obj = new URLSearchParams(qs);
let id = Obj.get("id");
let url4 = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
let img = document.querySelector(".imgdetalle");
let titulo = document.querySelector(".h1detalle");
let fecha = document.querySelector(".fecha");
let desc = document.querySelector(".descripcion");
let dur = document.querySelector(".duracion");
let generos1 = document.querySelector(".parrafo");
let calificacion = document.querySelector(".iconos");
let boton = document.querySelector("#recom");
let container = document.querySelector(".reco-container")
let recomenDisplay = document.querySelector(".recomendar");


console.log(id);

fetch(url4)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        let generos = ""
        for (let index = 0; index < data.genres.length; index++) {
            generos += `${data.genres[index].name}`
            
        }
            img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
            titulo.innerText = data.title;
            generos.innerText = data.genres;
            fecha.innerText = "Lanzamiento:" + " " + data.release_date;
            desc.innerText = "Sinopsis:" + " " + data.overview;
            dur.innerText = data.runtime + " " + "min";
            calificacion.innerText = "Calificacion:" + " " + data.vote_average;
            generos1.innerText = "Genero:" + " " + generos;


    })
        .catch(function(error){
        return;
    })

    boton.addEventListener('click', function (e) {
        let recom = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

        console.log(recom);
        fetch(recom)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                container.style.display = "block";
                let info = "";
                for (let index = 0; index < 5; index++) {
                    info += `<img class="imgdetalle" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}";
                    <h3 class ="h1detalle">${data.results[index].title}</h3>`
                    
                }
            recomenDisplay.innerHTML = info;
            
            })
                

            
    
    .catch(function(error){
        console.log(error);
    })
})


