const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploadedFiles'),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploadedFiles'));
        },
        filename: (req, file, callback) => {
            const fileName = `Pokedex.xlsx`
            callback(null, fileName);
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, callback) => {
        const allowedMimes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];

        if( allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("Arquivo com extenção invalida"))
        }
    }
};