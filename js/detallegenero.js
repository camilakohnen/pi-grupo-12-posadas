let api_key = "e62f099aa015b1afedfca7df020f6e6b";
let queryString = location.search;
let sToObj = new URLSearchParams(queryString);
let idgenero = sToObj.get('idgenero');
let name = sToObj.get('name'); 

let urldgp = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idgenero}`

fetch(urldgp)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let contenido = "";
        for (let index = 0; index < 5; index++) {
            console.log(data.results[index].poster_path)
           contenido = `
           
           <article class="articledetallegenero">
                <a href="./detallepelicula.html?id=${data.results[index].id}"">
                    <img class="imgdetallegenero" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="img">
    
                </a>
           </article>   `   
        };

        let detallegenero = document.querySelector(".sectiondetallegenero");
        detallegenero.innerHTML += contenido;      

    })

    .catch(function(error){
        console.log(error);
    }) 

