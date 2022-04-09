
// (function name(){
//     var age = 21 ;
//     console.log(name);
// })('maruf')
// console.log(age);
//---------------------------------------------------------
//node js defaultly add 5 parameter which we can use
//(function(exports,module,require,_dirname,_filename){
    //anything
    
//})(can pass value from here)

// npm module
// const color = require('cli-color')
// console.log(color.yellowBright('hello node js'));
//==========================================
//local module
//here we will call register form auth.js file
// const register =  require('./auth.js');
// register('maruf');

//now will call object form auth
// const auth = require('./auth')
// auth.login('logger maruf')
//==================================================
//core module(provided by node js documentation)
const path = require('path')
//console.log(__filename);
//E:\web projects\Node Basic\module.js
//dirname
// console.log('Folder Name :' , path.dirname(__filename))
// Folder Name : E:\web projects\Node Basic

//filename
// console.log('File Name :' , path.basename(__filename))

//Extension
// console.log('Ext Name :' , path.extname(__filename))

//parse
// console.log('parse Name :' , path.parse(__filename))

//join(this will join multiple path method)
//will create a path with added folder and a app.js file
// console.log('join :' , path.join(__filename,'order_folder','app.js'))
//output: join : E:\web projects\Node Basic\module.js\order_folder\app.js


//file system(file create ,read, write on file)
const fs =require('fs')

//make a directory
// fs.mkdir(path.join(__dirname,'/test'),(err)=>{
//     if(err){
//         console.log('something went wrong...')
//         return
//     }else{
//         console.log('file created...')
//     }
// })

// create a file
// fs.writeFile(path.join(__dirname,'test','test.txt'),'Hello node\n',(err)=>{
//     if(err){
//         throw err
//     }
//     fs.appendFile(path.join(__dirname,'test','test.txt'),'more data',(err)=>{
//         if(err){
//             throw err
//         }
//         console.log('data added')
//     })
    
//     console.log('file created...')
    
// })



//read a file
// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
//     if(err){
//         throw err
//     }
    // console.log(data)
    // output <Buffer 48 65 6c 6c 6f 20 6e 6f 64 65 0a 6d 6f 72 65 20 64 61 74 61>
    //to get data in string form buffer
    // const content = Buffer.from(data)
    // console.log(content.toString())]
    

    //more easy way to get output in string is to use 'utf-8'
    // console.log(data)
// }) 


//os module (node will provide info of the system)
// const os = require('os')
// console.log('os type: ', os.type())
// console.log('os platform: ', os.platform())
// console.log('cpu architecture: ', os.arch())
// console.log('cpu detail: ', os.cpus())
// console.log('free memory: ', os.freemem())
// console.log('total memory: ', os.totalmem())
// console.log('uptime: ', os.uptime())
// console.log('free memory: ', os.freemem())

//----------------------------------------------------
//events module
// const Emiter = require('events')

//emiter means after register, varification and other thing
//now will create an object of emiter
// const myEmiter =new Emiter()
// now on method will callback ify. that if find an event named 'somename' Emited ,then action will return a data
//listen
// myEmiter.on('somename',(data)=>{
//     console.log(data)
// })

//  now we will emit an event named 'somename'
//call
// myEmiter.emit('somename',{
//     name : 'maruf'
// })


//practical example of Event module

// class Auth extends Emiter{
//     register(username){
//         console.log('register successfully')
//         this.emit('registered',username)
//     } 
// }
// const auth = new Auth()

//varify email
// auth.on('registered',(data)=>{
//     console.log(`sending emaiil to ${data}`)
// })
//pass username to auth

//welcome mail
// auth.on('registered',(data)=>{
//     console.log(`sending welcome emaiil to ${data}`)
// })

// auth.register('maruadon')

//---------------------------------------------------------

//HTTP module













