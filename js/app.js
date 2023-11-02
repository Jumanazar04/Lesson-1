const demo = document.querySelector('.card')
const input = document.querySelector('.form-control')
const form = document.querySelector('.form')

// const name1 = prompt('Enter first name...')
// const age = prompt('Enter year of birth...')
// const fullAge = 2023-age
// demo.innerHTML = `
//    ${name1}, ${fullAge}-yil, ${fullAge*12}-oy, ${fullAge*52}-hafta, ${fullAge*365}-kun, ${fullAge*365*24}-soat, ${fullAge*365*24*60}-minut, ${fullAge*365*24*60*60}-sekund yashagansiz
// `

// const names = [
//    'Jumanazar',
//    'Muhammadqodir',
//    'Omatjon',
//    'Farrux',
//    'SHaxriyor',
// ]

// form.addEventListener('submit', (e)=>{
//    e.preventDefault()
//    const valInput = input.value
//    const searchName = names.includes(valInput)

//    if (searchName) {
//       demo.innerHTML =`
//          ${valInput}, Bor
//       `
//    }else{
//       demo.innerHTML = `
//          Yo'q
//       `
//    }

//    form.reset()
// })

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let sum = ''

// for (let i = 0; i < numbers.length; i++) {
//    sum += numbers[i] + numbers[i] +"<br>";
//    demo.innerHTML = sum
// }

// form.addEventListener('submit', (e)=>{
//    e.preventDefault()
//    console.log(input.value.length);
//    // switch (input.value) {
//    //    case 'Andijon':
//    //      demo.innerHTML =  '3 mln 700 ming aholi'
//    //       break;
//    //    case 'Fergana':
//    //          demo.innerHTML =  '4 mln 100 ming aholi'
//    //    break;
//    //    case 'Namangan':
//    //      demo.innerHTML =  '3 mln 100 ming aholi'
//    //    break;
//    //    default:
//    //       break;
//    // }

//    if (input.value.length == 20) {
//       demo.innerHTML = 'Ok';
//    }if (input.value.length > 20) {
//       const sum = input.value.length - 20;
//       demo.innerHTML = `${sum} ta belgi o'chirishingiz kerak`
//    }if (input.value.length < 20) {
//       const sum = Math.abs(input.value.length - 20);
//       demo.innerHTML = `Yana ${sum} ta belgi kiritishingiz kerak`
//    }

// })

// const plusBtn = document.querySelector('.plus')
// const minusBtn = document.querySelector('.plus')
// const result = document.querySelector('.text')

// plusBtn.addEventListener('click', (e)=>{
//    e.preventDefault()
//    plus()
//    // result.textContent = + 1;
// })
// minusBtn.addEventListener('click', (e)=>{
//    e.preventDefault()
//    minus()
//    // result.textContent = + 1;
// })

// function plus (){
//    return result.textContent = + 1
// }
// function minus (){
//    return result.textContent = - 1
// }

// const bill = () => {
//    let total = 0;

//    for (let i = 0; i < 100; i++) {
//       total += [i];
//    }

//    return total
// }
// const result = bill()
// console.log(result);

