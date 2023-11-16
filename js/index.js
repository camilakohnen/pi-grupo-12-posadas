let apiKey = "e62f099aa015b1afedfca7df020f6e6b";

//películas populares de home

let endPointPeliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
fetch(endPointPeliculasPopulares)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento = document.querySelector(".pelispopulares")  
        for (let i = 0; i < 5; i++) {
            documento.innerHTML += `<article class="article">
                <a href="./detallepelicula.html?id=${data.results[i].id}">
                <img class="fotopelis" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                </a>
                <a class="primera" href="./detallepelicula.html?id=${data.results[i].id}"><h4 class="h4home">${data.results[i].title}</h4></a>
                <a class="segundo" href="./detallepelicula.html?id=${data.results[i].id}"><h3 class="h4bhome">${data.results[i].release_date}</h3></a>
                </article>`}
                
    })
    .catch(function (error) {
        console.log(error);
    })

 //series populares de home

let endPointSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
fetch(endPointSeriesPopulares)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento = document.querySelector(".seriespopulares")  
        for (let i = 0; i < 5; i++) {
            documento.innerHTML += `<article class="article">
                <a href="./detalleserie.html?id=${data.results[i].id}">
                <img class="fotopelis" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                </a>
                <a class="primera" href="./detalleserie.html?id=${data.results[i].id}"><h4 class="h4home">${data.results[i].title}</h4></a>
                <a class="segundo" href="./detalleserie.html?id=${data.results[i].id}"><h3 class="h4bhome">${data.results[i].release_date}</h3></a>
                </article>`}
            
    })
    .catch(function (error) {
        console.log(error);
    })

//películas más valoradas de home

let endPointPeliculasValoradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
fetch(endPointPeliculasValoradas)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
    let documento = document.querySelector(".pelisvaloradas")  
    for (let i = 0; i < 5; i++) {
        documento.innerHTML += `<article class="article">
            <a href="./detallepelicula.html?id=${data.results[i].id}">
            <img class="fotopelis" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
            </a>
            <a class="primera" href="./detallepelicula.html?id=${data.results[i].id}"><h4 class="h4home">${data.results[i].title}</h4></a>
            <a class="segundo" href="./detallepelicula.html?id=${data.results[i].id}"><h3 class="h4bhome">${data.results[i].release_date}</h3></a>
            </article>`}
        
    })
    .catch(function (error) {
        console.log(error);
    })


   
     

        
   

