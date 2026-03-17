const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const orderRoutes = require('./routes/orderRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes)
app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
console.log(process.env.MONGO_URI)

app.get("/" , (req,res) => {
    res.send("HI this is the backend of book store by zei")
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })
})
.catch((err) => {   console.log(err) })