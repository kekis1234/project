// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// const lastWatched = prompt('Один из последних просмотренных фильмов?');
// const itsRating = prompt('На сколько оцените его?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {
//         [lastWatched]: itsRating
//     },
//     actors: {},
//     genres: [],
//     privat: false
// }
// console.log(personalMovieDB)


// if (4 == 9) {
//    console.log('Ok!'); 
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo');
//  }else {
//     console.log('Ok!');
//  }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 50:
        console.log('в точку!');
        break;
    default:
        console.log('не сегодня');
        break;
}