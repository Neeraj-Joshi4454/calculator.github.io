



let buttons = document.querySelectorAll('button');
let input = document.querySelector('#input');
let subButton = document.querySelector('.sub-btn');
let clearButton = document.querySelector('.clearButton');

buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
    
        input.value+=btn.value;     

    })

})

console.log(buttons)


subButton.addEventListener('click', () => {

    let screenValue = input.value;
    let res = eval(screenValue)

    input.value = res
   

})

clearButton.addEventListener('click', () => {

    input.value=""

})

