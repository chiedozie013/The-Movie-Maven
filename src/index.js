import "./style.css";
import header from "./modules/header";
import { getMovies } from "./modules/movies.js";
import { movieCounter } from "./modules/movieCounter.js";
import { postLikes, getLikesCount } from "./modules/involvement.js";

header();
getMovies(movieCounter, postLikes, getLikesCount);
