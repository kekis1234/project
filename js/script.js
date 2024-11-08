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

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 

// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }

//     console.log(i);  
// } 

//  let result = '';
//  const length = 7;

//  for (let i = 1; i < length; i++) {

//     for(let j =0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
//  }

//  console.log(result);

//  first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
//  }

//  function firstTask() {
//     for (let i = 5; i < 10; i++)
//     // Пишем решение вот тут
    
    
// }

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
    
    // result += "/n";

    // const lines = 5;
    // let result = '';
    
    // for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += "\n";
    // }



    // const numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false   
    // };

    // for (let i = 0; i < 2; i++) {
    //     const a = prompt('один из последних просмотренных фильмов?', ''),
    //           b = prompt('на скольк оцените фильм?', '');

    //        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //           personalMovieDB.movies[a] = b;
    //          console.log('done!');
    //         }else {
    //             console.log('error');
    //             i--;
    //         }
           

           
           
           
           
              personalMovieDB.movies[a] = b;

    

    // if (personalMovieDB.count < 10) {
    //     console.log("просмотрено довольно мало фильмов");
    // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    //     console.log("Вы классический зритель");
    // } else if (personalMovieDB.count >= 30) {
    //         console.log("вы киноман") 
    // } else {
    //        console.log("Произошла ошибка");
    //     }   
            
        
    
       
    

    // console.log(personalMovieDB);

let num = 20

    function showFirstMessage(text) {
        console.log(text);
        let num = 20
    }   

    showFirstMessage('Hello world');
    console.log(num);

    function calc(a, b) {
        return (a + b);
    }
    
    console.log(calc(7, 4));
    console.log(calc(6, 4));
    console.log(calc(4, 2));

    function ret() {
        let num = 50;
        return num
    }

    const another