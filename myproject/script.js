// setTimeout(() => {

// }, 5000)

// document.querySelector('#contact').scrollIntoView({
//     behavior: 'smooth'
// });

function scrollToView(element) {
    console.log(element)
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    })
}

//Check if given integer is even
const isEven = (n) => {
    let inc = 2;
    if (n < 0) inc = -inc;

    if (n === 0) return true;
    if (n === 1 || n === -1) return false;
    return isEven(n - inc)
}

console.log(isEven(-10))