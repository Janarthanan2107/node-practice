// Import
// const express = require("express");
import express from "express";
import products from "./data.js"
// Initialize
const app = express();
const PORT = 5000;

// Route
/*
    app.httpMethodName("reqUrl", (req, res) => {
        // response
    })
    httpMethods => GET, POST, PUT, PATCH, DELETE
    app.get("/", (req, res) => {
        // response
    })
*/
// http://localhost:5000
app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Express.js</h1>");
});

// http://localhost:5000/about
app.get("/about", (req, res) => {
    res.status(200).send("<h1>This is About Page</h1>");
});

// http://localhost:5000/products => Getting all the products
app.get("/products", (req, res) => {
    const newProducts = products.map(({ id, title, description, price, category }) => {
        return {
            id,
            title,
            price,
            description,
            category
        };
    });
    //   console.log(newProducts);
    res.status(200).json({ success: true, data: newProducts });
});

app.get("/products/:id", (req, res) => {
    // params return the object in a string form
    const { id } = req.params
    const singleProduct = products.find((product) => product.id === Number(id))

    if (!singleProduct) {
        res.status(200).json({ success: true, message: "No records found" })
    } else {
        res.status(200).json({ success: true, data: singleProduct })
    }
})

// http://localhost:5000/products/api/query?catagory=value&limit=number
// http://localhost:5000/products/api/query?catagory=mens&limit=3
app.get("/products/api/query", (req, res) => {
    // console.log(req.query);
    const { category, limit } = req.query;
    console.log(category)
    console.log(limit)

    const newProducts = [...products]
    // console.log(newProducts)

    const filteredProducts = newProducts.filter((product) => product.category.startsWith(category))
    // console.log(filteredProducts)

    const limitedProducts = filteredProducts.filter((product, index) => index < Number(limit))
    // console.log(limitedProducts)

    if (!filteredProducts) {
        res.status(200).json({ success: true, message: "products not found" })
    } else {
        res.status(200).json({ success: true, data: limitedProducts })
    }
})

app.get("*", (req, res) => {
    res.status(404).send(`
      <h2>Page not found</h2>
      <a href="/">Back to home page</a>
      `);
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});