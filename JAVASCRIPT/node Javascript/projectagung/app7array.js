const usernames = [
    'yandy',
    'dimas',
    'mita',
];

console.log(usernames[0]);

const newUsename = 'dimas';
const isTaken = usernames.includes(newUsename);

if (isTaken) {
    console.log('Username sudah diambil');
} else {
    console.log('Username masih tersedia.');
}

// console.log(avengers.length)

console.log("Ada total " + usernames.length + " username.");
// const text = "Ada total " + usernames.length + " username."
// console.log(text);

const myFavoriteFood = [
    'mie ayam',
    'nasi goreng',
    'seblak',
];

console.log(myFavoriteFood.length)
console.log("Makanan favoritku yang kedua adalah " + myFavoriteFood[1] + ".");