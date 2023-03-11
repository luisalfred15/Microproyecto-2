export const HOME_LINK = '/'
export const REGISTER_LINK = '/register'
export const LOGIN_LINK = '/login'
export const FAVORITES_LINK = '/favorites'
export const PROFILE_LINK = '/profile'
export const FILM_DETAIL_LINK = (filmId = ":filmId") =>
  "/characters/" + {filmId};