// import { movies } from "./movies.js";
import { postComments, getComments } from "./commentInvolvement.js";
import counter from "./counter.js";

const movies = "https://api.tvmaze.com/shows";
const popUpSection = document.querySelector(".popup-section");

const popUp = async () => {
  //   const res = await fetch(movies);
  //   const data = await res.json();

  const commentBtn = document.querySelectorAll(".comments-button");

  commentBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      popUpSection.innerHTML = `
  <div class="overlay">
    <div class="popup-container" id = ${data[i].id}>
     <span class="close-btn">&times;</span>
       <div class="popup-img-container">
          <img src=${data[i].image.medium} alt=${data[i].name} class="popup-img" id = ${data[i].id} />
        </div>
        <h3 class="popup-title">${data[i].name}</h3>
        <div class="popup-info">
          <p class="popup-genre"><strong>Genre:</strong> ${data[i].genres}</p>
          <p class="popup-type"><strong>Type:</strong> ${data[i].type}</p>
          <p class="popup-language"><strong>Language:</strong> ${data[i].language}</p>
          <p class="popup-rating"><strong>Rating:</strong> ${data[i].rating.average}</p>
          <p class="popup-premiered"><strong>Premiered:</strong> ${data[i].premiered}</p>
        </div>
        <div class="popup-description">
          <p class="popup-summary">${data[i].summary}</p>
       </div>
        <div class="popup-comments">
        <h3>Comments (<span class="comment-count"></span>) </h3>
          <ul class="comments-list">
          </ul>
        </div>
        <form class="form">
          <input
            type="text"
            name="fname"
            id="popup-name"
            placeholder="Your name"
            required
          />
        <textarea name="insights" cols="30" rows="5" id="popup-insight" placeholder="Your insights" required></textarea>
        <button type= "submit" class="popup-btn" id = ${data[i].id}>Comment</button>
        </form>
    </div>
  </div>
    `;
    });
  });
};

// const closeBtn = () => {
//   document.addEventListener("click", (e) => {
//     const target = e.target.closest(".close-btn");
//     const section = e.target.parentElement.parentElement;
//     if (!target) return;
//     section.classList.add("hide");
//   });
// };

const displayComment = (comment) => {
  const commentContainer = document.querySelector(".comments-list");
  if (!comment.error) {
    commentContainer.innerHTML = comment.map(
      (item) =>
        `<li> ${item.creation_date}: ${item.username}: ${item.comment} </li>`
    );
  }
  const allComments = document.querySelectorAll(".comments-list li");
  const commentCount = document.querySelector(".comment-count");
  commentCount.innerHTML = counter(allComments);
};

// const submitComment = () => {
//   document.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const target = e.target.closest(".form");
//     const targetId = Number(e.target.parentElement.id);
//     if (!target) return;
//     await postComments(targetId);
//     const comment = await getComments(Number(targetId));
//     displayComment(comment);
//     target.reset();
//   });
// };

const cardContainer = document.querySelector(".movie-container");
cardContainer.addEventListener("click", async (e) => {
  if (e.target.className === "comments-button") {
    const comment = await getComments(Number(e.target.id));
    displayComment(comment);
  }
});

export { popUp, closeBtn, submitComment };
