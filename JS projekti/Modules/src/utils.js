import { color, log, red, cyan,green, blue } from 'console-log-colors';

niz1.array.forEach(item =>  printCyan(item))
    
niz2.array.forEach(item => printCyan(item))
    
niz3.array.forEach(item => printCyan(item))
    



export const printGreen = (text) =>{
    console.log(green(text));
}
export const printBlue = (text) =>{
    console.log(blue(text));
}
export const printRed = (text) =>{
    console.log(red(text));
}
export const printCyan = (text) =>{
    console.log(cyan(text));
}

// export const braca = (text) => {
//     console.log(cyan(braca))
// }
// export const bruda = (text) => {
//     console.log(green(bruca))
// }
// export const likovi = (text) => {
//     console.log(red(brada))
// }
// export const likovi = (text) => {
//     console.log(blue(bruda))
// }
