require("dotenv").config();

const express = require("express");
// instance
const app = express();
const port = process.env.port || 3000;
// route 
const product_route = require("./routes/products")
// connection
const connectDB = require("./db/connect")

// GET request
app.get("/", (req, res) => {
    res.send(`I am live on ${port}`)
})

// middleware
app.use("/api/products", product_route)

// Start application
const start = async() => {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, ()=> {
        console.log("connected");
    })
}

start();