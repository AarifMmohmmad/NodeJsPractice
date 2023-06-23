console.log("aarif mohammad");

const fs = require("fs")

const data1 = fs.readFileSync("input.txt")
console.log("DATA --- ",data1);
// readFileSync  is file read and  data converd  to in buffer 

const data12 = fs.writeFileSync("output.txt"  ,  data1)
console.log("data12");
// console.log("data12",data12);


// write file  kis file me apna data add krna he us file ka nam lena he bad me kya add krna he vo likhna he ya esko hm verible me add nhi krana he kyu ki eska koy sence nhi he 

const data2 = fs.readFile("input.txt",(err , data2) =>{
    if(err) throw err;
    console.log("line 18",data2);
});
console.log("run");
// read file me phle path dena he kis file ko pdhna he uska bad me second 
// stap me yhe ak callback function leta he jo jisme error and data leta 
//  erroar me throw errar retun krta he and data me jis file ko hmne read kiya he us data ko return krta he 
const data21 = fs.writeFile("output.txt"  ,"aarifkhan",(err,data2)=>{
    if(err){
        console.log(err.message);
    };
    console.log("data21");
})




// writefile me kis file me data add krna he uska nam/ path uske sath hi second me kis data ko add krna he vo likhna he usme sirf data string me ya buffer data me hi likha jata he sath     lkin yhe kisi veriable me store data ke sath error nhi deta he 


// update readfile and writefile 
const data = fs.readFile("input.txt" , {encoding : "utf-8"},function(err,data){

    console.log("line 40" ,data);
    fs.writeFile("output.txt",data,{encoding : "utf-8"} ,function(err){

        if(err) throw err;
        console.log("succeess line 44 " , data);
    })
})

//  yha hm read file ke sathe hi write file kr rhe he jisse readfile async chne ke bad bhi 
// write file phle nhi chlgi or read file hone ke bad hi write file hi chllgi jisse 
// hm error se bch se skte he 





// Storage  checking 
const files = require("fs");
try {
  const stats = files.statSync("input.txt");
  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats.isSymbolicLink()); // false
  console.log(stats.size / 1000); // 1024000 //= 1MB
} catch (err) {
  console.error(err);
}


// creat folders 
const folderName = "./scripts/";
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("Successfully created the given folder");
  }else{
  console.log("folder exict");
    
  }
} catch (err) {
  console.error(err);
}