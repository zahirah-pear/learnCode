const sayHi = (name) => {

    console.log('Hi ' + name);
};

function sayHi2 (name){
    console.log('Hi ' + name );
};

// ksempulannya arrow function pakek arrow dan const

const sayBye = (name) => {
    console.log("Bye, " + name);
};

const add2 = (x, y) => x + y;

// versi panjang 
// const add = (x, y) => {
//    return x + y;
// };

const identity = (name, age) => name + " adalah umur " + age;

console.log(identity("Malika", 17));