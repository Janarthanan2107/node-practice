import express from "express"
import products from "./data.js"

const app = express()
const PORT = 5000;

// middleware for define the json formate
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(`<h1>Welcome to Node Js Http Methods</h1>
    <a href="/api/v1/products">Go to products</a>`)
})

// get all products
// http://localhost:5000/api/v1/products
app.get("/api/v1/products", (req, res) => {
    res.status(200).json({ success: true, data: products })
})

// get single products
// http://localhost:5000/api/v1/products/:id
app.get("/api/v1/products/:id", (req, res) => {
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id))

    if (!singleProduct) {
        res.status(200).send({ success: true, message: `Product not fount in the id : ${id}` })
    } else {
        res.status(200).json({ success: true, data: singleProduct })
    }
})

// create product
// http://localhost:5000/api/v1/products/create
app.post("/api/v1/products/create", (req, res) => {
    // body is the inbuilt keyword for req
    // console.log(req.body)

    const id = Math.random().toString(16).slice(2)

    const newProduct = {
        id,
        ...req.body
    }

    console.log(newProduct)

    res.status(201).json({ success: true, message: `Your product successfully created wit the id : ${id}` })
})

// update Product
// http://localhost:5000/api/v1/products/:id
app.put("/api/v1/products/:id", (req, res) => {
    const { id } = req.params;
    const findProduct = products.find((product) => product.id === Number(id))

    if (!findProduct) {
        res.status(200).send({ success: true, message: `Product not fount in the id : ${id}` })
    } else {
        const newProduct = {
            id: findProduct.id,
            ...req.body,
        }

        const updatedProducts = products.map((product) => {
            if (product.id === Number(id)) {
                return {
                    id: product.id,
                    title: newProduct.title,
                    description: newProduct.description,
                    price: newProduct.price,
                    category: newProduct.category,
                    image: newProduct.image
                }
            } else {
                return product;
            }
        })
        res.status(200).json({ success: true, message: `Product Updated Successfully with the id ${id}!`, data: updatedProducts })
    }
})

// deleteProduct
// http://localhost:5000/api/v1/products/:id
app.delete("/api/v1/products/:id", (req, res) => {
    const { id } = req.params;
    const remaining = products.filter((product) => product.id === Number(id))

    res.status(200).json({ success: 200, message: "Product deleted successfully!" })

})

app.listen(PORT, () => {
    console.log(`Server is listening in the Port: ${PORT}`)
})