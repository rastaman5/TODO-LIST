
const express = require("express");
const mongoose = require("mongoose");
const uuid = require("uuid");
const cors = require("cors")
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors());

const connectionString = "mongodb://localhost:27017/todoos"
mongoose.connect(connectionString);


const UserSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

const UserModel = mongoose.model("users", UserSchema);


// app.get("/getusers",   (req, res) => { 
//    UserModel.find({}).then(function(users) {
//        res.json(users)
//    }).catch(function(err) {
//      console.log(err)
//     })
// })


app.get("/getusers",   async (req, res) => { 
    const userData = await UserModel.find()
    res.json(userData);
 })

 
app.put("/todos/:id", async (req, res) => { 
    const userData = await UserModel.findByIdAndUpdate(req.params.id)
    res.json(userData)
})

// const todos =[
//     {
//         id: 1,
//         name: "Washing",
//         completed: true
//     },

//     {
//         id: 2,
//         name: "Reading",
//         completed: false
//     },

//     {
//         id: 3,
//         name: "Shopping",
//         completed: true
//     }
// ]

// app.get("/", (req, res) => {
//     console.log("POIP")
//     res.json({ msg: "Todo List Home Page "})
// });


// app.get("/todos/:id", (req,res) => {
//     //console.log(req.params.id);
//     let todo = todos.filter((todo) =>  todo.id ==  req.params.id)
//     res.json({msg: "1 Todo", data: todo})
// })

// //GET, POST, PUT, DELETE, PATCH
// app.post("/todos", (req, res) =>{
//     //console.log(req.body);
//     todos.push({id:  uuid.v4(), ...req.body})
//     res.json({msg: "Add Todo", data: todos})
// })

// app.put("/todos/:id", (req, res) =>{
//     let todo = todos.find((todo) => todo.id == req.params.id);
//     if (todo) {
//         todo.name = req.body.name;
//         todo.completed = req.body.completed
//         res.json({ msg: "Edit Todo", data: todos })
//     } else {
//         res.json({msg: "Todo not found"})
//     } 
// })

// app.delete("/todos/:id", (req, res) =>{
//     let index = todos.findIndex(todo => todo.id == req.params.id);
//    todos.splice(index, 1)
//     res.json({msg: "Delete Todo", data:todos});
// })



app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});