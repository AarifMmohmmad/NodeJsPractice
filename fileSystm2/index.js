const fs = require("fs");
const path = require("path");

// fs.readFileSync("input.txt")
// fs.writeFileSync("output.txt","aarif mohammad",)


/// creat file 
// fs.openSync("inoput.txt", 'w')

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


// creat folders
//   fs.mkdir("nodejs1" ,(errr)=>{
//     if(errr){
//         throw errr
//     }else{
//         console.log("success");
//     }
//   })
 

// geting path from home dirctry
// console.log(path.resolve("nodejs"))




// creat folder in folders
// const path = require("path");
// let folder = ["node1","node2","node3","node4","node5"]
// for(let i = 0;i< folder.length ; i++){

//     fs.mkdir(path.join("nodejs", folder[i]) ,(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("success");
//         }
//     })

// }


// show file and folders in a given dircters 
// console.log(fs.readdirSync("nodejs"))
// fs.readdir(("nodejs"),(err,files)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log(files);
//     }
// })

// create file in folder
// let filess = ["file1.html","file2.html", "file3.html" ,"file4.html","file5.html", ]

// for(let i = 0 ; i<filess.length;i++){
//     fs.open(path.join("nodejs", filess[i]) ,'w',(err)=>{
//         if(err) {
//           console.log(err); 
//         }else if(!fs.existsSync(filess[i])){
//         console.log("already creaat");
//     }else{
//         console.log("success");
//     }
//     })
// }

// console.log(fs.lstatSync("file1.html"))

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
  };
  

 const fff= fs.readdirSync("nodejs")
    .map(fileName => {
      return path.join("nodejs", fileName);
    })
    .filter(isFile);

    console.log(fff); 
 
console.log(fs.lstatSync("index.js").isFile())
 
// console.log(fs.lstatSync('inoput.txt'));



// hr ak folder me file creat 



// const fifo = ["node1" , "node2","node3","node4","node5"]
// for(let i = 0 ; i<fifo.length; i++){
// fs.open(path.join("nodejs" , fifo[i] , "file1.html") ,"w" ,(err)=>{
//     if(err){
//         console.log(err);

//     }else if(!fs.existsSync(fifo[i])){
//         console.log("already creaat") 
//     }else{
//         console.log("success");
//     }
// })

// }  


// Nodejs folder ke andar file2.html ko delete kr dena hai, file3.html ko file8.html rename kr dena hai 



// fs.rm("nodejs/file2.html" , (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully delet");
//     }
// })

// fs.rename("nodejs/file3.html" , "nodejs/file8.html" ,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully renems");
//     }
// })


// file1.html ka data file4.html me copy kr dena hai 

// const data = fs.readFileSync("nodejs/file1.html" )
// console.log(data);

// fs.writeFileSync("nodejs/file4.html" , data)

 //nodejs3, nodejs4, nodejs5 folder ko delete kr dena hai 
//   let deletfolder = ["node3", "node4", "node5"]
// for(let i = 0 ; i < deletfolder.length ; i++){
//  fs.rm(path.join("nodejs" ,  deletfolder[i] ),{ recursive: true, force: true }, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully delet");
//     }
// })

// }

