const express = require('express')
const router = express.Router()
//const mongoose = require("mongoose");

// const connectionString = "mongodb://localhost:27017/todoos"
// mongoose.connect(connectionString);

//let { todos } = require("../data")


// const UserSchema = new mongoose.Schema({
//     name: String,
//     completed: Boolean,
// });
// const UserModel = mongoose.model("users", UserSchema)
const todos = [
     {
             id: 1,
            name: "Washing",
            completed: true
        },
    
        {
            id: 2,
            name: "Reading",
            completed: false
        },
    
        {
            id: 3,
            name: "Shopping",
            completed: true
        }]


// GET all todos
router.get('/', (req, res) => {
    res.json(todos);
});
  
  // POST a new todo
  router.post('/', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }
  
    const newTodo = {
        id: todos.length + 1,
        task,
        completed: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

  
  // PUT to update a todo
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;

    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

  
    if (task !== undefined) {
        todo.task = task;
    }

    if (completed !== undefined) {
        todo.completed = completed;
    }

    res.json(todo);
});
  
  // DELETE a todo
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(t => t.id !== parseInt(id));
    
    res.status(204).send(); // No content to send back
});
  
    module.exports = router
      

// router.get("/",   async (req, res) => { 
//     const userData = await UserModel.find()
//    res.json(userData);
//  })

 
// router.put("/:id", async (req, res) => { 
//     const userData = await UserModel.findByIdAndUpdate(req.params.id)
//    res.json(userData)
// })


// const todos =[
//  
// ]

// router.get("/todos", (req, res) => {
//     console.log("POIP")
//     res.json({ msg: "Todo List Home Page "})
// });


// router.get("/:id", (req,res) => {
//     //console.log(req.params.id);
//     let todo = todos.filter((todo) =>  todo.id ==  req.params.id)
//     res.json({msg: "1 Todo", data: todo})
// })

// //GET, POST, PUT, DELETE, PATCH
// router.post("/", (req, res) =>{
//     //console.log(req.body);
//     todos.push({id:  uuid.v4(), ...req.body})
//     res.json({msg: "Add Todo", data: todos})
// })

// router.put("/:id", (req, res) =>{
//     let todo = todos.find((todo) => todo.id == req.params.id);
//     if (todo) {
//         todo.name = req.body.name;
//         todo.completed = req.body.completed
//         res.json({ msg: "Edit Todo", data: todos })
//     } else {
//         res.json({msg: "Todo not found"})
//     } 
// })

// router.delete("/:id", (req, res) =>{
//     let index = todos.findIndex(todo => todo.id == req.params.id);
//    todos.splice(index, 1)
//     res.json({msg: "Delete Todo", data:todos});
// })


module.exports = router
