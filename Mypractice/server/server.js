const http = require("http")
   const myserver = http.createServer((req,res)=>{
        const method = req.method;
        const url = req.url;
        console.log(method,url);
        if(method=='GET' && url=='/'){
            res.end("Hello");
        }
   });
myserver.listen(3000,()=>{console.log("server listening")});