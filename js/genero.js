let api_key =  `e621099aa015b1afedfca7df020f6e6b `;
let queryString = location.search;
let sToObj = new URLSearchParams(queryString);
let id = sToObj("id");
let urlgpeliculas =  `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key} `
let urlgseries =  `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key} `

fetch(urlgpeliculas)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let pys  = document.querySelector(".sectionpeliculas")
        for (let index = 1; index < 10; index++){
            pys.innerHTML += `<ul> 
            <li> <a class="listadetallegenero" href="./detallegenero.html?idgenero=${data.genres[index].id}"> ${data.genres[index].name}</a></li>
     
        </ul>`}
    })

    .catch(function(error){
        console.log(error);
    })
    fetch(urlgseries)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let pys  = document.querySelector(".sectionseries")
        for (let index = 1; index < 10; index++){
            pys.innerHTML += `<ul> 
            <li> <a class="listadetallegenero" href="./detallegenero.html?idgenero=${data.genres[index].id}"> ${data.genres[index].name}</a></li>
     
        </ul>`}
    })
    .catch(function(error){
        console.log(error);
    })