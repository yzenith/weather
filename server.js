const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("normal"));
app.use(express.static("public"))

app.get("/", (req,res)=>{
  res.send(_dir/index.html);
})


let server = process.env.PORT || 8080;
app.listen(server, ()=>{
  console.log(`server is running on ${server}`)
})
