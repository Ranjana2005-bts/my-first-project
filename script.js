function recommendMovies() {
  const genre = document.getElementById("genre").value;
  const recommendationList = document.getElementById("recommendation-list");

  // Clear previous recommendations
  recommendationList.innerHTML = "";

  // Expanded movie recommendations by genre
  const movies = {
    Action: [
      "Mad Max: Fury Road",
      "John Wick",
      "Die Hard",
      "The Dark Knight",
      "Gladiator",
      "Avengers: Endgame",
      "Mission Impossible: Fallout",
      "Black Panther",
      "Wonder Woman",
      "The Bourne Identity"
    ],
    Comedy: [
      "Superbad",
      "The Hangover",
      "Step Brothers",
      "Mean Girls",
      "Ferris Bueller's Day Off",
      "Anchorman",
      "Bridesmaids",
      "Dumb and Dumber",
      "The Mask",
      "Zoolander"
    ],
    Drama: [
      "The Shawshank Redemption",
      "Forrest Gump",
      "Fight Club",
      "The Godfather",
      "A Beautiful Mind",
      "12 Years a Slave",
      "The Pursuit of Happyness",
      "Good Will Hunting",
      "Titanic",
      "Schindler's List"
    ],
    "Sci-Fi": [
      "Inception",
      "Interstellar",
      "The Matrix",
      "Blade Runner 2049",
      "Star Wars: A New Hope",
      "Guardians of the Galaxy",
      "Arrival",
      "Ex Machina",
      "Minority Report",
      "Jurassic Park"
    ],
    Fantasy: [
      "Harry Potter and the Sorcerer's Stone",
      "Harry Potter and the Deathly Hallows",
      "The Lord of the Rings: The Fellowship of the Ring",
      "The Lord of the Rings: The Return of the King",
      "Fantastic Beasts and Where to Find Them",
      "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      "Percy Jackson & the Olympians: The Lightning Thief",
      "Pan's Labyrinth",
      "The Hobbit: An Unexpected Journey",
      "Stardust"
    ],
    Series: [
      "Stranger Things",
      "Game of Thrones",
      "Breaking Bad",
      "The Witcher",
      "The Mandalorian",
      "Sherlock",
      "Westworld",
      "The Umbrella Academy",
      "Dark",
      "Money Heist"
    ]
  };

  // Get movies for selected genre
  const selectedMovies = movies[genre];

  // Display recommendations
  selectedMovies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie;
    recommendationList.appendChild(li);
  });
}
