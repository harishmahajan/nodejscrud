const user = require("../controller/user");

module.exports = (app)=>{
    app.post("/user",user.createUser);
    app.put("/user",user.updateUser);
    app.delete("/user",user.deleteUser);
    app.get("/user", user.listUser);
}