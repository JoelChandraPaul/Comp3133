const fs = require("fs");
const csv = require("csv-parser");

// (a) delete files if they exist
if (fs.existsSync("canada.txt")) fs.unlinkSync("canada.txt");
if (fs.existsSync("usa.txt")) fs.unlinkSync("usa.txt");

// write headers
fs.appendFileSync("canada.txt", "country,year,population\n");
fs.appendFileSync("usa.txt", "country,year,population\n");

fs.createReadStream("input_countries.csv")
  .pipe(csv())
  .on("data", (row) => {
    const country = row.country.toLowerCase();

    // (b) Canada
    if (country === "canada") {
      fs.appendFileSync(
        "canada.txt",
        `${row.country},${row.year},${row.population}\n`
      );
    }

    // (c) United States
    if (country === "united states") {
      fs.appendFileSync(
        "usa.txt",
        `${row.country},${row.year},${row.population}\n`
      );
    }
  })
  .on("end", () => {
    console.log("CSV file successfully processed.");
  });
