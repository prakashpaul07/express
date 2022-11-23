const express=require("express")
const app=express()
const port=4000;
var emp=[{name:"raj",id:101,college:"siddhartha"},{name:"prakash",id:102,college:"pb"}]
const students=require("./data.js")
const cors=require("cors")

app.use(cors())


app.get("/",(req,res)=>{
	res.send("hi i am a server")
})


app.get("/user",(req,res)=>{
	res.send("how are you")
})

app.get("/emp",(req,res)=>{
	res.json(emp)
})

app.get("/students",(req,res)=>{
	res.json(students)
})



app.listen(port,()=>console.log("server is done"))
