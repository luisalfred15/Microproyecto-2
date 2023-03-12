import React from "react";
import { Link } from "react-router-dom";
import { FILM_DETAIL_LINK } from "../../constants/links";

function MovieBox({ movie }) {
  return (
    <Link>
      <div class="card" style="width: 18rem;">
        <img
          class="card-img-top"
          src={FILM_DETAIL_LINK + movie.poster_path}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{movie.original_title}</h5>
          <p class="card-text">{movie.overview}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{movie.popularity}</li>
          <li class="list-group-item">{movie.original_language}</li>
        </ul>
      </div>
    </Link>
  );
}

export default MovieBox;
