const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const products = {
    id: 1,
    name: "Head Phone",
    price: 3999,
    description: "High quality wireless headphone"
}

app.get("/api/products", (req,res) => {
    res.json(products)
})

app.listen(4000, () => {
    console.log("server starts at port 4000")
})