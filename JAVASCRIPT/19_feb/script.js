const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box");

const getMovies = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    showMovies(data.results); // Assuming the movie data is within the 'results' property
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

const showMovies = (data) => {
  data.forEach((e) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
      <img src="${IMGPATH + e.poster_path}"/>
    `;
    movieBox.appendChild(box);
  });
};

getMovies(APIURL);
