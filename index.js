const express = require("express");
const app = express();


app.listen(8080, () =>{
    console.log("Port 8080");
});
app.get("/", (req, res) => {
    res.send("<html><head></head><body><h1 style='color:red'>Hello World</h1></body></html>");
});