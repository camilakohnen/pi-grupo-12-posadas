let apikey = "e62f099aa015b1afedfca7df020f6e6b";
let queryString = location.search;
let sToObj = new URLSearchParams(queryString);
let id = sToObj.get("id");
let urlgpeliculas =  `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
let urlgseries =  `https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}`

fetch(urlgpeliculas)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let pys  = document.querySelector(".sectionpeliculas")
        for (let index = 1; index < 10; index++){
            pys.innerHTML += `<ul> 
            <li> <a class="listadetallegenero" href="./detallegenero.html?idgen=${data.genres[index].id}&nombreGen=${data.genres[index].name}"> ${data.genres[index].name}</a></li>
     
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
        let ps  = document.querySelector(".sectionseries")
        for (let index = 1; index < 10; index++){
            ps.innerHTML += `<ul> 
            <li> <a class="listadetallegenero" href="./detallegenero.html?idgen=${data.genres[index].id}&nombreGen=${data.genres[index].name}"> ${data.genres[index].name}</a></li>
     
        </ul>`}
    })
    .catch(function(error){
        console.log(error);
    })