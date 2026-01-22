const fs = require('fs')

const filePath = "input_data.txt";

fs.readFile(filePath, (error, data) => {
    if (err) {