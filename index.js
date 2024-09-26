const express = require("express");

const uuid = require("uuid");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3000;

const todoRoutes = require('./routes/people');

//const PORT = process.env.PORT || 300;

app.use(express.json())
app.use(cors());

app.use('/todos', todoRoutes);


// app.get("/getusers",   (req, res) => { 
//    UserModel.find({}).then(function(users) {
//        res.json(users)
//    }).catch(function(err) {
//      console.log(err)
//     })
// })


app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});