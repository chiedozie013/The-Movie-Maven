import './style.css';
import getMovies from './modules/movies.js';
import movieCounters from './modules/movieCounter.js';
import { postLikes, getLikesCount } from './modules/involvement.js';
import header from './modules/header.js';
import { popUp, closeBtn, submitComment } from './modules/pop-up.js';

header();
getMovies(movieCounters, postLikes, getLikesCount);
popUp();
closeBtn();
submitComment();
