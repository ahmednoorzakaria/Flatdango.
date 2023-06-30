document.addEventListener('DOMContentLoaded', function(){
    let showMovies = document.getElementById('Movies')
    console.log(showMovies)
    fetch('http://localhost:3000/films', {
        method :'GET',
        headers: {
            'content-type':'application/json',
            "Accept": "*application/json*"
        } ,
    })
    .then(res => res.json())
    .then(movies => movieInputs(movies , showMovies))
})

function movieInputs(movies , showMovies){
    movies.forEach(movie => {
        let movieWhere = document.createElement('div')
        movieWhere.innerHTML = `
        <img src='${movie.poster}'>
        <h3>${movie.title}<h3>
        <div id='Description'>
        <p> ${movie.description}</p>
        <p> <span> Runtime:${movie.runtime}</span> 
            <span>Capacity:${movie.capacity}</span>
            <span>Show Time : ${movie.showtime}</span>
        </p>
        <p>Tickets sold : ${movie.tickets_sold}</p>
        <p>Remaining tickets : (${movie.capacity}-${movie.tickets_sold})</p>
        <button> BOOK TICKET</button>
        </div>
        `
        showMovies.appendChild(movieWhere)
    });
}