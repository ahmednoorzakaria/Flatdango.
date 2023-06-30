document.addEventListener('DOMContentLoaded', function() {
    let showMovies = document.getElementById('Movies');
    let showList = document.getElementById('movie-list');
  
    fetch('http://localhost:3000/films', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(movies => {
        movieInputs(movies, showMovies);
        movieList(movies, showList);
      })
      .catch(error => console.error(error));
  
  });
  
  function movieInputs(movies, showMovies) {
    movies.forEach(movie => {
      let movieWhere = document.createElement('div');
      let All = `${movie.capacity}`;
      let sold = `${movie.tickets_sold}`;
      let Remaining = parseInt(All - sold);
  
      movieWhere.innerHTML = `
        <img src='${movie.poster}'>
        <h3>${movie.title}<h3>
        <div id='Description'>
          <p>${movie.description}</p>
          <p>
            <span>Runtime: ${movie.runtime} minutes</span>
            <span>Capacity: ${movie.capacity}</span>
            <span>Show Time: ${movie.showtime}</span>
          </p>
          <p>Tickets sold: ${movie.tickets_sold}</p>
          <p>Remaining tickets: ${Remaining}</p>
          <button>BOOK TICKET</button>
        </div>
      `;
  
      showMovies.appendChild(movieWhere);
    });
  }
  
  function movieList(movies, showList) {
    movies.forEach(movie => {
      let movieHere = document.createElement('li');
      movieHere.innerHTML = movie.title;
      showList.appendChild(movieHere);
    });
  }
  