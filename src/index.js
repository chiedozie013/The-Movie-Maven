import './style.css';

import header from './modules/header.js';
import { getMovies } from './modules/movies.js';
import { movieCounter } from './modules/movieCounter.js';
import { postLikes, getLikesCount } from './modules/involvement.js';
import { popUp, closeBtn, submitComment } from './modules/pop-up.js';

header();
getMovies(movieCounter, postLikes, getLikesCount);
popUp();
closeBtn();
submitComment();
