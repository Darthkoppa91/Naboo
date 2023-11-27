
import md5 from "md5";

import {palacinke as niz1,gradovi as niz2, imena as niz3} from "./src/data.js";





import { printBlue, printGreen, printRed,printCyan } from "./src/utils.js";

import { likovi } from "./src/data.js";

const hasedMsg = md5("hello world!")
likovi.forEach(item =>{
        printBlue(item);
        printGreen(item);
        printRed(item);
        printCyan(item);
})



// console.log(hasedMsg)
