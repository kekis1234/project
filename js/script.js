const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const lastWatched = prompt('Один из последних просмотренных фильмов?');
const itsRating = prompt('На сколько оцените его?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [lastWatched]: itsRating
    },
    actors: {},
    genres: [],
    privat: false
}
console.log(personalMovieDB)
