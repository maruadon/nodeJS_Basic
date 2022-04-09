const register = (username)=>{
    console.log(`User ${username} has been registerd`)
}
const login = (username,password)=>{
    console.log(`User ${username} is logged in`)
}
//we have to export this function.
// module.exports = register;
//but if we have to export multiple function then we have to create an object of function and then use that on ther module
module.exports = {
    register,
    login
}

