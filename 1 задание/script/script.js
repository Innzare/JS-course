let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm = prompt('Один из последних просмотренных фильмов', ''),
    lastFilmRange = prompt('На сколько его оцените?', ''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов', ''),
    lastFilmRange2 = prompt('На сколько его оцените?', '');

personalMovieDB.movies[lastFilm] = lastFilmRange;
personalMovieDB.movies[lastFilm2] = lastFilmRange2;

console.log(personalMovieDB);
