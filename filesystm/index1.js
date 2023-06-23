
const fs = require("fs/promises");
function writeFileFn(data) {
    try {
      const prom = fs.writeFile("output.txt", data);
      prom
        .then(function () {
          console.log("line 8" ,"Success");
        })
        .catch(function (error) {
          console.error(error.message);
        });
    } catch (err) {
      console.log(err);
    }
  }
  writeFileFn("123");

  
async function writeFileFns(data) {
  try {
    await fs.writeFile("outputss.txt", data);
    console.log("line 23" , "suceess");
  } catch (err) {
    console.log(err);
  }
}
writeFileFns("123");


// const fs = require("fs/promises");
async function readFileFn() {
  try {
    const out = await fs.readFile("input.txt", { encoding: "utf-8" });
    console.log("line 35" ,out);
  } catch (err) {
    console.log(err);
  }
}
readFileFn();


function readFileFns() {
  try {
    const prom = fs.readFile("input.txt", { encoding: "utf-8" });
    prom
      .then(function (data) {
        console.log("line 49" ,data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  } catch (err) {



    console.log(err);
  }
}
readFileFns(); 



// khan 
/*
Absolutepath and relativepath 

ak hi folder me ak hi file ko
*/

// kisi bhi file ya folder ka root dictry se path absout path 

// jha me nhi hu usse dusri jgh ka path 

// index1.js --- index.js ka reality path btay  -- 