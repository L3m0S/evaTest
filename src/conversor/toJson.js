const XLSX = require('xlsx');

async function toJson() {
    const workbook = XLSX.readFile('../tmp/uploadedFiles/Pokedex.xlsx');
    console.log(workbook);
}

module.exports = toJson