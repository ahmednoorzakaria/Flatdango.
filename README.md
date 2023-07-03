# Flatdango.
# Movie Ticket Booking System

This is a simple movie ticket booking system that allows users to buy tickets for movies. The system displays a list of movies with their details such as title, description, runtime, capacity, showtime, tickets sold, and remaining tickets. Users can click on the "BUY TICKET" button to purchase a ticket for a movie. The number of available tickets decreases on the frontend, and the ticket count is updated in the backend JSON data.

## Features

- Display a list of movies with details
- Show the remaining tickets count for each movie
- Allow users to buy tickets for a movie
- Update the ticket count in the JSON data when a ticket is purchased
- Prevent users from buying tickets if the showing is sold out

## Technologies Used

- HTML/CSS: For the structure and styling of the user interface
- JavaScript: For the dynamic behavior of the application
- Fetch API: For making HTTP requests to retrieve movie data and update JSON data
- JSON: For storing and updating movie data
- Event listeners: To listen for button clicks and perform actions accordingly

## Setup and Usage

1. Clone the repository to your local machine.
2. Open the project directory in a code editor.
3. Open the `index.html` file in a web browser.
4. The list of movies will be displayed on the page.
5. Click the "BUY TICKET" button to purchase a ticket for a movie.
6. The remaining tickets count will be updated, and a message will be logged in the console.

## JSON Data Structure

The JSON data represents the movie data and is stored in a file on the server.

```json
{
  "films": [
    {
      "id": 1,
      "title": "Movie 1",
      "description": "Description of Movie 1",
      "runtime": 120,
      "capacity": 100,
      "showtime": "2023-07-01 18:00:00",
      "tickets_sold": 10,
      "poster": "path/to/poster1.jpg"
    },
    {
      "id": 2,
      "title": "Movie 2",
      "description": "Description of Movie 2",
      "runtime": 105,
      "capacity": 80,
      "showtime": "2023-07-02 20:00:00",
      "tickets_sold": 20,
      "poster": "path/to/poster2.jpg"
    }
  ]
}

