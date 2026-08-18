// Optional Node.js backend starter. Keep API keys here, never in index.html.
const http=require('http');const port=process.env.PORT||3000;http.createServer((req,res)=>{res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:true,message:'YT Hub backend is running'}))}).listen(port,()=>console.log('YT Hub backend on '+port));
