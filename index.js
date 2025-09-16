import express from "express";
import todo from "./call.js";

const app = express();
const PORT = 2000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/todo", (req, res) =>{
  res.json({message : "Todo List",data: todo})
})

app.post("/addtodo",(req,res) =>{
  res.json({message : "Todo Added"})

})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})