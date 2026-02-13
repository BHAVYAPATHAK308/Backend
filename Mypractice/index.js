const fs = require("fs");
const data = fs.readFileSync("file.txt","utf-8");
console.log(data);

fs.readFile("file.txt","utf-8",(err, data) => {
console.log(data);
});

fs.writeFile("note.txt","Hello World","utf-8",(err) => {
if (err)throw err;
console.log("File written");
});

fs.writeFileSync("note.txt","Hello Sync");

