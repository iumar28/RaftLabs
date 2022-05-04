// This code is used to read the CSV file. In this, we have used csv-parser
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('magazines.csv')
.pipe(csv({}))
.on('data',(data)=>results.push(data))     
.on('end',()=>{
    console.log(results);
});
