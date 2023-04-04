let dbUsers = [
    {
        username: "Shivaranjini",
        password: "123456",
        name: "Shivaranjini",
        email: "ranjini3400@gmail.com"
    },
    {
        username: "john",
        password: "7891011",
        name: "John",
        email: "john@gmail.com"
    },
    {
        username: "Ali",
        password: "654321",
        name: "Ali",
        email: "ali@gmail.com"
    }
]

function login(reqUsername, reqPassword) {
    let matchUser = dbUsers.find(
        x => x.username == reqUsername
    )

    
    if(!matchUser) return "User not found!"
    if(matchUser.password == reqPassword) {
        return matchUser
    } else {
        return "Invalid password"
    }
}

//to register an account
function register(reqUsername, reqPassword, reqName, reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name:reqName,
        email: reqEmail
    })

}
//try to login
console.log(login("Shivaranjini", "123456"))
console.log(login("john","password"))

register("utem", "password", "fkekk", "fkekk@utem.edu.my")

console.log(login("utem","password"))