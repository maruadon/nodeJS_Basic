//http module

const http = require('http')
const fs = require('fs')
const path = require('path')
//now we will process port by node method or by default set port 3000
//we can set port in env file . If not set default set 3000
const PORT = process.env.PORT || 3000 
//now create a server

const app = http.createServer((request,response)=>{
    // console.log(request.url)
    // if(request.url === '/'){
    //     //now we will set status message 200 in server ant set content type
    //     response.writeHead(200,{
    //         'content-Type' : 'text/html'
    //     })
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
        
    //         if(err){
    //             throw err
    //         }
    //         response.end(content)
    //     })
    // }else if(request.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
        
    //         if(err){
    //             throw err
    //         }
    //         response.end(content)
    //     })
    // } 

    let filePath = path.join(__dirname,'public', request.url === '/' ? 'index.html' : request.url)

    let contentType = 'text/html'
    //now we will set the extension
    let ext = path.extname(filePath)
    if(!ext){
        filePath += '.html'
        //if no ext is availavle then add .html
    }
    switch(ext){
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }
    fs.readFile(filePath,(err,content)=>{
        if(err){
            fs.readFile(path.join(__dirname,'public','error.html'),(err,data)=>{
                if(err){
                    response.writeHead(500)
                    response.end('error!!!')
                }else{
                    response.writeHead(404,{
                        'content-type': contentType
                    })
                    response.end(data)
                }
                
            })
        }else{
            response.writeHead(200,{
                'content-type': contentType
            })
            response.end(content)
        }
       
    })
})
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})