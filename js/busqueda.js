let apiKey = "e62f099aa015b1afedfca7df020f6e6b";

let queryString = location.search;
let stringToObject = new URLSearchParams(queryString);
let aBuscar = stringToObject.get('busqueda');

let resultados = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${aBuscar}`;

fetch(resultados)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let info = data.results;
        let search = document.querySelector(".resbusqueda");
        let peliculaSearch = document.querySelector(".maingenero");

        if (info.length == 0) {
            search.innerHTML = `No se encontró ningún resultado que coincida con ${aBuscar}`;
        } else {
            search.innerHTML = `Estos son los resultados de búsqueda para ${aBuscar}`;
        }

        for (let i = 0; i < info.length; i++) {
            if (info[i].media_type == "movie") {
                peliculaSearch.innerHTML += `
                    <article>
                        <a class="fotopelis" href="./detallepelicula.html?q=${info[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}">
                        </a>
                        <a class="fotopelis" href="./detallepelicula.html?q=${info[i].id}">
                            <p>${info[i].title}</p>
                        </a>
                    </article>`;
            } else {
                peliculaSearch.innerHTML += `
                    <article>
                        <a class="serie" href="./detalleserie.html?q=${info[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].name}">
                        </a>
                        <a class="serie" href="./detalleserie.html?q=${info[i].id}">
                            <p>${info[i].name}</p>
                        </a>
                    </article>`;
            }
        }
    })
    .catch(function (error) {
        console.log(error);
    });

