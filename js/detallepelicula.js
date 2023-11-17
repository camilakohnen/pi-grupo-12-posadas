let apiKey = "e62f099aa015b1afedfca7df020f6e6b";


let detallep = document.querySelector(".sectiondetalle")
let queryString = location.search;
let objeto = new URLSearchParams(queryString);
let id = objeto.get("id");
let url4 = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
let img = document.querySelector(".imgdetalle");
let titulo = document.querySelector(".h1detalle");
let fecha = document.querySelector(".fecha");
let descripcion = document.querySelector(".descripcion");
let duracion = document.querySelector(".duracion");
let genero = document.querySelector(".parrafo");
let iconoss = document.querySelector(".iconos");
let boton = document.querySelector("#recom");
let container = document.querySelector(".reco-container")
let recomenDisplay = document.querySelector(".recomendar");

let Trailer = document.querySelector(".trailer");
let urlTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;





fetch(url4)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        let generos = "";
        for (let index = 0; index < data.genres.length; index++) {
            generos += `<a href="./detallegenero.html?id=${data.genres[index].id}">${data.genres[index].name}</a>`
            
        }
            titulo.innerText = data.title;
            fecha.innerText = "Lanzamiento:" + " " + data.release_date;
            duracion.innerText = data.runtime + " " + "min";
            iconoss.innerText = "Calificacion:" + " " + data.vote_average;
            genero.innerHTML = "Genero:" + " " + generos;
            
            descripcion.innerText = "Sinopsis:" + " " + data.overview;
            img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

    })
        .catch(function(error){
            console.log(error)
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
                        <a href = "./detallepelicula.html?id=${data.results[index].id}"><img class="imgdetalle" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="img no disponible"</a>;
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
    
        // Adicional Trailer

    fetch(urlTrailer)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data.results);
            Trailer.innerHTML = `<iframe width="420" height="300" src="https://www.youtube.com/embed/${data.results[0].key}?si=iiP5A0Grbeb8srOu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            if (video == null){
                return 'No hay trailer disponible'
            } else{
                for (let i = 0; i < 5; i++) {
                    Trailer.innerHTML += `${data.results[i].title}`
            
                }
            }
        })
        .catch(function(error){
            console.log(error);
   
        })

   
    