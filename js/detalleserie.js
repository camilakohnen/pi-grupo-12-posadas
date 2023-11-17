let apiKey = "e62f099aa015b1afedfca7df020f6e6b";


let detallep = document.querySelector(".sectiondetalle")
let queryString = location.search;
let objeto = new URLSearchParams(queryString);
let id = objeto.get("id");
let url4 = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
let img = document.querySelector(".imgdetalle");
let titulo = document.querySelector(".h1detalle");
let fecha = document.querySelector(".fecha");
let descripcion = document.querySelector(".descripcion");
let duracion = document.querySelector(".temp");
let iconoss = document.querySelector(".iconos");
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
            titulo.innerText = data.title;
            fecha.innerText = "Lanzamiento:" + " " + data.release_date;
            duracion.innerText = "temporadas:" + " " + data.number_of_seasons;
            iconoss.innerText = "Calificacion:" + " " + data.vote_average;
            generos1.innerText = "Genero:" + " " + generos;
            generos.innerText = data.genres;
            descripcion.innerText = "Sinopsis:" + " " + data.overview;
            img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

    })
        .catch(function(error){
        return;
    })

    boton.addEventListener('click', function () {
        let recom = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`;

        console.log(recom);

        fetch(recom)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                container.style.display = "block";
                let info = "";
                if (data.results.length>0){
                    for (let index = 0; index < 5; index++) {
                        info += `<article class="article">
                        <img class="imgdetalle" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="img no disponible";
                        <h4 class ="h1detalle">${data.results[index].title}</h4>

                        </article`
                    }
                 }

                else{
                    alert("No hay recomendaciones")
                 }

                 recomenDisplay.innerHTML = info;
             })

            
            .catch(function(error){
                console.log(error);
            })
        })


