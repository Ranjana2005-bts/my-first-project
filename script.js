const movies = [
  { title: "Avengers: Endgame", genre: "Action" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "The Hangover", genre: "Comedy" },
  { title: "Superbad", genre: "Comedy" },
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Interstellar", genre: "Sci-Fi" },
  { title: "Inception", genre: "Sci-Fi" }
];

function recommendMovies() {
  const genre = document.getElementById("genre").value;
  const list = document.getElementById("recommendation-list");
  list.innerHTML = "";

  const filteredMovies = movies.filter(movie => movie.genre === genre);

  filteredMovies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    list.appendChild(li);
  });
}
