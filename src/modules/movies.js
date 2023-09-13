import { postLikes, getLikesCount } from './involvement.js';

const movies = 'https://api.tvmaze.com/shows';

const getMovies = async (test) => {
  try {
    const result = await fetch(movies);
    let output = '';
    const data = await result.json();
    data.forEach((movie) => {
      const newMovie = `<div class="card" item_id="${movie.id}">
                <img src=${movie.image.medium}>
                <div class="movie-title">
                <h2 class="movie-name">${movie.name}</h2>                
                <div class="like-btn">
                <button class="like"><i class="fa fa-heart-o likes" id=${movie.id}></i></button>
                <h2 class="likesCount" id="likesCount-${movie.id}"></h2>
                </div>
                </div>
                <div class="card-buttons">
                <button class="comments-button" id=${movie.id}>Comment</button>
                </div>
            </div>
            `;
      output += newMovie;
    });

    const displayMovies = document.querySelector('.movie-container');
    displayMovies.innerHTML = output;
    // passed in test above in order to be able to get length of all movies available
    test(data.length);

    // update likes counter and display on DOM
    const updateLikesCount = async () => {
      const likesData = await getLikesCount();
      likesData.forEach((item) => {
        const likesCount = [`${item.likes}`];
        const likesCountElement = document.getElementById(
          `likesCount-${item.item_id}`,
        );
        if (likesCountElement) likesCountElement.innerText = likesCount || '0';
      });
    };

    updateLikesCount();

    // like button functionality
    const likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((button) => {
      button.addEventListener('click', async (item) => {
        const { id } = item.target; // get the ID of the clicked element
        postLikes(id); // pass the ID to postLikes
        item.preventDefault();
      });
      updateLikesCount();
    });
  } catch (error) {
    const displayMovies = document.querySelector('.movie-container');
    displayMovies.innerText = error;
  }
};

/* eslint-disable import/prefer-default-export */
export { getMovies };
