const XLSX = require('xlsx');

async function toJson() {
    const workbook = XLSX.readFile('../tmp/uploadedFiles/Pokedex.xlsx');

    let worksheets = {};

    for (const sheetName of workbook.SheetNames) {
        worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    }
    
    return worksheets.Planilha1
}


module.exports = toJson