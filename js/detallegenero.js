let api_key = "e62f099aa015b1afedfca7df020f6e6b";
let queryString = location.search;
let sToObj = new URLSearchParams(queryString);
let idgenero = sToObj.get('idgen');
let nombreGen = sToObj.get('nombreGen');
let name = sToObj.get('name');
let urldgp = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idgenero}`;
let urldgs = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=${idgenero}`;
let titulo = document.querySelector('.tituloDetalle');
titulo.innerText = nombreGen;

fetch(urldgp)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        let info = data.results;
        let contenido = "";
        for (let index = 0; index < Math.min(5, info.length); index++) {
            if (info[index].poster_path != null) {
                console.log(data.results[index].poster_path);
                contenido += `
                    <article class="articledetallegenero">
                        <a href="./detallepelicula.html?id=${data.results[index].id}">
                            <img class="imgdetallegenero" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="img">
                            </a>
                            </article>`;
                    }
                }
        
                let detallegenero = document.querySelector(".sectiondetallegenero");
                detallegenero.innerHTML = contenido;
        
            })
        
            .catch(function (error) {
                console.log(error);
            });
        
        fetch(urldgs)
            .then(function (response) {
                return response.json();
            })
        
            .then(function (data) {
                console.log(data);
                let contenidoseries = "";
                for (let index = 0; index < Math.min(5, info.length); index++) {
                    if (info[index].poster_path != null) {
                        console.log(data.results[index].poster_path);
                        contenidoseries += `
                            <article class="articledetallegeneroserie">
                                <a href="./detalleserie.html?id=${data.results[index].id}">
                                    <img class="imgdetallegenero" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="img">
                                    <h1></h1>
                                    </a>
                                </article>`;
                        } 
                    }
            
                    let detallegeneroserie = document.querySelector(".sectiondetallegeneroseries");
                    detallegeneroserie.innerHTML = contenidoseries;
            
                })
            
                .catch(function (error) {
                    console.log(error);
                });