function sayHappyBirthday(name, age) {
    console.log("Selamat Ulang tahun, " + name + " ke " + age);
};
function sayMyName (name) {
    console.log("Malika Nashita Zahirah " + name);
};

sayHappyBirthday("heya", 10)
sayHappyBirthday("beya", 19)
sayHappyBirthday("deya", 21)
// function biasanya kata awalnya kata kerja 
// misal :  -get    -set    -update     -handle     -generate   -log
// function harus dipaggil, caranya "function();"

function sayNumber (number) {
    if (number === 0) {
        console.log("Netral");
    } else if (number > 0) {
        console.log("Positif");
    } else if (number < 0) {
        console.log("Negatif");
    }
};

function logEquetion(x, y) {
    const z = x + y
    console.log(x + " ditambah " + y + " sama dengan " + z);
};


logEquetion(10, 7);
logEquetion(2, 6);
logEquetion(8, 45);