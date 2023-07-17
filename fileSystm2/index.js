const { error } = require("console");
const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

// fs.readFileSync("input.txt")
// fs.writeFileSync("output.txt","aarif mohammad",)

// fs.mkdir("node",(errr)=>{
//   if(errr){
//   console.log("errrr",errr);
//   }else{
//   console.log("success");
//   }
// })
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

// check file in dirctry


// const checkfile= fs.readdirSync("nodejs")
// .map(fileName => {
//   return path.join("nodejs", fileName);
// })
// .filter(fileName => {
//   return fs.lstatSync(fileName).isFile();
// });

// console.log(checkfile); 



/// checkfolder in dirctry
//  const checkfoder= fs.readdirSync("nodejs")
//     .map(fileName => {
//       return path.join("nodejs", fileName);
//     })
//     .filter(fileName => {
//       return fs.lstatSync(fileName).isDirectory();
//     });
 
//     console.log(checkfoder); 
 
// console.log(fs.lstatSync("index.js").isFile())
 
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


//file5.html ko copy krna hai but nodejs2 folder ke andar 


// fs.copyFile("file5.html","node2/",(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("success");
//   }
// })


// fs.readdir("nodejs",(err,files)=>{
//    if(err){
//     console.log(err);
//     return;
//    }
// const folder = files
// .filter(files => files.isDirectory())
// .map(file => file.name)
// console.log(folder);

//   }
//   ) 





// const folder = fs.readdirSync("node")
// const checkfoder= fs.readdirSync("nodejs")
// exictingfile = []
// for(let i =0;i<folder.length;i++){
//   for(let j = 0 ;j<checkfoder.length ; j++){
//   if(folder[i]  === checkfoder[j]){
//     if(fs.lstatSync( path.join("nodejs" , checkfoder[j]) ).isFile()){
//       exictingfile.push(checkfoder[j])
//     }
//   }
//   }
// }
// console.log(exictingfile);

// Question: Write a Node.js program that reads the contents of a text file, capitalizes the text, writes the modified content to a new file, prints the modified content on the console, renames the new file, and finally deletes the original file. Implement the solution using the fs module in Node.js.

// Your program should perform the following steps:

// Read the contents of a text file called "input.txt".
// Convert the text to uppercase.
// Write the modified content to a new file called "output.txt".
// Print the modified content on the console.
// Rename "output.txt" to "newfile.txt".
// Delete the original file, "input.txt".
// Implement the program in Node.js, ensuring error handling and appropriate logging of each step.


// const readData = fs.readFileSync("input.txt" )  
// const dataconved = readData.toString()
// fs.writeFile("output.txt",dataconved,(error)=>{
//   if(error){
//     console.log(error);
//   }else{
//     console.log("data success fully writing");
//   }
// })

// console.log(dataconved);
// fs.rename("output.txt" , "newfile.txt",(error)=>{
//   console.log(error);
// })
// try {
// fs.rmSync("input.txt")
//   console.log("successfuly delet");
// } catch (error) {
//   console.log(error);
// }
 

const checkfile= fs.readdirSync("nodejs")
.map(fileName => {
  return path.join("nodejs", fileName);
})
.filter(fileName => {
  return fs.lstatSync(fileName).isFile();
});

console.log(checkfile); 
for(let i = 0;i<checkfile.length;i++){

 fs.stat(checkfile[i],(err,stats)=>{
  if(err){
    console.log(err);
  }
  console.log(stats.mtime)
})

}

