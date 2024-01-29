let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
const UserModel = require('./models/Users')

let app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:2701/crud")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/crud');
}

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})



app.listen(5500,()=>{
    console.log("server is started")
})