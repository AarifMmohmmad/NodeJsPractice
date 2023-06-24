// Express ek web application framework hai Node.js ke liye, jabki ek HTTP server actual server software ya implementation ko refer karta hai jo HTTP requests aur responses ko handle karta hai.


const http = require("http")


const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log("request" , req.console);
     res.end("hiii")

})


server.listen(8000,"localhost",()=>{
    console.log("creat server");
})                                         


