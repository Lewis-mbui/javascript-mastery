// You’re storing movie ratings.

// Create an object where keys are movie 
// titles and values are ratings (1–10).

// Write a loop that prints each movie with its rating.

// Find the highest-rated movie (don’t hardcode it).

const movies = {
  "Inception": 9,
  "The Room": 2,
  "The Dark Knight": 9,
  "Cats": 1,
  "Interstellar": 8,
  "Justice League": 5,
  "Parasite": 10,
  "Frozen": 7,
  "Avatar": 6,
  "Morbius": 3,
  "Forrest Gump": 9,
  "The Lion King": 8,
  "Shrek": 7,
  "Twilight": 4
};

let highestRatedMovie;
let highestRating = 0;

for (let [movieTitle, rating] of Object.entries(movies))
  console.log(`${movieTitle} has a rating of ${rating}`);

for (let key in movies) {
  if (movies[key] > highestRating) {
    highestRating = movies[key];
    highestRatedMovie = key;
  }
}

console.log(`${highestRatedMovie} is the highest rated movie with a rating of ${highestRating}`);


