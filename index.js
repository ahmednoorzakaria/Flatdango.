document.addEventListener("DOMContentLoaded", function () {
  let showMovies = document.getElementById("Movies");
  let showList = document.getElementById("movie-list");

  fetch("http://localhost:3000/films", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((movies) => {
      movieInputs(movies, showMovies);
      movieList(movies, showList);
      let buttons = document.getElementsByClassName("ambutton");
      Array.from(buttons).forEach((button) => {
        button.addEventListener("click", function (event) {
          const movieId = button.getAttribute("data-movie-id");
          const remainingTicketsElement = button.parentElement.querySelector("#remainingTickets");
          let remainingTickets = parseInt(remainingTicketsElement.innerText);

          if (remainingTickets > 0) {
            remainingTickets--;
            remainingTicketsElement.innerText = remainingTickets;
            console.log(`Ticket bought for movie ID: ${movieId}`);
            // Send a PATCH request to update the JSON data
            fetch(`http://localhost:3000/films/${movieId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ tickets_sold: remainingTickets }),
            })
              .then((res) => res.json())
              .then((updatedMovie) => {
                console.log('Ticket count updated in the JSON data:', updatedMovie);
              })
              .catch((error) => console.error(error));
          } else {
            alert("Sorry, this showing is sold out!");
          }
        });
      });
    })
    .catch((error) => console.error(error));
});

function movieInputs(movies, showMovies) {
  movies.forEach((movie) => {
    let movieWhere = document.createElement("div");
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
        <p>Remaining tickets: <span id="remainingTickets">${Remaining}</span></p>
        <button class='ambutton' data-movie-id="${movie.id}">BUY TICKET</button>
      </div>
    `;

    showMovies.appendChild(movieWhere);
  });
}

function movieList(movies, showList) {
  movies.forEach((movie) => {
    let movieHere = document.createElement("li");
    movieHere.innerHTML = movie.title;
    showList.appendChild(movieHere);
  });
}
