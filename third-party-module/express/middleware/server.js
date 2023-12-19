import express from "express";
import products from "./data.js";

const app = express()
const PORT = 8080;

// Middleware function
const middleware = (req, res, next) => {
    console.log("Middleware One");
    next();
};

const auth = (req, res, next) => {
    console.log("Auth");
    const { username } = req.query;
    if (username === "jan") {
        setTimeout(() => {
            req.lastname = "robert";
            next();
        }, 3000);
    } else {
        res.status(400).send("<h1>User is invalid!!</h1>");
    }
};

const commonMiddleware = (req, res, next) => {
    console.log("commonMiddleware");
    next();
};

// app.use(commonMiddleware)

app.get("/", (req, res) => {
    res.status(200).send("<h1>welcome to middle ware</h1>")
})

// app.get("/products", middleware, (req, res) => {
//     res.status(200).json({ success: true, data: products })
// })

// user validation
// app.get("/products", auth, (req, res) => {
//     res.status(200).json({ success: true, data: products })
// })

app.get("/login", auth, (req, res) => {
    const { username } = req.query;
    const { lastname } = req;
    res
        .status(200)
        .json({ success: true, message: `Welcome, ${username}, ${lastname}` });
});

app.listen(PORT, () => {
    console.log(`Server is running in the port http://localhost:8080`)
})