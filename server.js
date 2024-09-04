import express from "express"

const app = express()

const port = 5000






app.get("/", (req, res) =>{
    // res.sendFile(__dirname + '../Docker/index.html')
    res.send("Hello, world!");
    console.log("test")

})

app.listen(port, () => console.log("Server running on port 5000"))