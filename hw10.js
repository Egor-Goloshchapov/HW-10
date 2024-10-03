const myMessage = function (message) {
    console.log(message);
}
const messageFunction = function (callback) {
    const prompt = confirm("Do you want to see the message?");
    if (prompt === true) {
        alert("Hello World")
    } else {
        alert("Try again")
    }
    callback(prompt);
}
messageFunction(myMessage);



const randomNumber = Math.floor(Math.random() * 100) + 1;

const checkGuess = () => {
    const userGuess = prompt('Write number between 1 and 100:');

    const guess = Number(userGuess);
    
    if (guess === randomNumber) {
        console.log('WELCOME, you guessed!');
    } else if (guess > randomNumber) {
        console.log('Number is too big, try again!');
    } else if (guess < randomNumber) {
        console.log('Your number is too small try again');
    }
};

console.log('I guessed a number from 1 to 100. Try to guess it!');
checkGuess();



const calculateDiscount = (price, discountPercent, callback) => {
    const discountAmount = (price * discountPercent) / 100;
    const discountedPrice = price - discountAmount;
    callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
    console.log(`Sale price: ${discountedPrice.toFixed(2)} grn`);
};

const price = 1000;
const discountPercent = 15;

calculateDiscount(price, discountPercent, showDiscountedPrice);



let clickCount = 0;

const handleClick = () => {
    clickCount++;
    console.log(`Ви клікнули ${clickCount} разів`);
};

document.addEventListener('click', () => handleClick());

