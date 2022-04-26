function getMovieInfosOMDB(title){
    const url = `http://www.omdbapi.com/?t=${title}&apikey=790af7bc`  
       
    fetch(url)
    .then(response => response.json())
    .then(data => { if(data.Response == 'False'){
        descriptionBodyNotFound.textContent = "Filme não encontrado! Tente novamente.";
        descriptionBodyNotFound.style.marginBottom = '30px'
        document.getElementById("movieTitle").innerHTML = ""
        document.getElementById("movie1").innerHTML = ""
        document.getElementById("movieRuntime").innerHTML = ""
        document.getElementById("imdbRating").innerHTML = ""
        document.getElementById("movie3").innerHTML = ""
        document.getElementById("movie4").innerHTML = ""
        document.getElementById("movie5").innerHTML = ""
        document.getElementById("movie2").innerHTML = ""
        moviePoster.style.backgroundImage = `url(ffilmenaoencontrado.jpg)`

    } 
     else {
        descriptionBodyNotFound.textContent = "";
        
        movie.textContent = data.movie
        movie1.textContent = data.movie1
        movie2.textContent = data.movie2
        movieRuntime.textContent = data.Runtime
        imdbRating.textContent = data.imdbRating
        movie3.textContent = data.Plot
        movie4.textContent = data.movie4
        movie5.textContent = data.movie5
        moviePoster.style.backgroundImage = `url(${data.Poster})`
    }
})  
}

var form = document.getElementById('formSearch');
var title = document.getElementById('title');

form.addEventListener('submit', function(e) {
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});
