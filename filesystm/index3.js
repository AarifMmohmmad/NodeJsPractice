const fs = require("fs");
// const data = fs.readFileSync("input.txt", { encoding: "utf-8" });
// console.log(data)
// const dd = fs.writeFileSync("output.txt",data )

// console.log(dd);
 

try {
    const stats = fs.statSync("input.txt");
    if(stats.isFile()){
        console.log(stats.size / 1000) 
  console.log('sss',stats.mtime)
    }
  } catch (err) {
    console.error(err);
  }


// const path = require("path");
// const folderName = "./fff"
// const details = fs.readdirSync(folderName)
// console.log(details);





// console.log('sss',stats.mtime)
// for(let i = 0 ; details.length ; i++){
// let stats = fs.statSync(folderName + "/" +details[i]);

// console.log('sss',stats.mtime)

// }

