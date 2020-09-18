const moment = require("moment")
const { differenceInDays, differenceInMonths, differenceInYears } = require("date-fns")

let oldDate = moment('2005-09-15');
let newDate = moment('2020-09-15');

let diasDeDiferenca = newDate.diff(oldDate, 'days');
let mesesDeDiferenca = newDate.diff(oldDate, 'months');
let anosDeDiferenca = newDate.diff(oldDate, 'years');

console.log("A diferença de dias entre 15/09/2005 e 15/09/2020 é " + diasDeDiferenca + " dias.");
console.log("A diferença de meses entre 15/09/2005 e 15/09/2020 é " + mesesDeDiferenca + " meses.");
console.log("A diferença de anos entre 15/09/2005 e 15/09/2020 é " + anosDeDiferenca + " anos.");

let oldDateFNS = new Date(2005, 9, 15);
let newDateFNS = new Date(2020, 9, 15);

let diasDeDiferencaFNS = differenceInDays(newDateFNS, oldDateFNS);
let mesesDeDiferencaFNS = differenceInMonths(newDateFNS, oldDateFNS);
let anosDeDiferencaFNS =differenceInYears(newDateFNS, oldDateFNS);

console.log("A diferença de dias entre 15/09/2005 e 15/09/2020 é de " + diasDeDiferencaFNS + " dias.");
console.log("A diferença de meses entre 15/09/2005 e 15/09/2020 é de " + mesesDeDiferencaFNS + " meses.");
console.log("A diferença de anos entre 15/09/2005 e 15/09/2020 é de " + anosDeDiferencaFNS + " anos.");