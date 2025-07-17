const express = require("express");
const router = express.Router();

// Dummy product data
let products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1500 },
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET single product by ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// POST a new product
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT (update) a product
router.put("/:id", (req, res) => {
  const index = products.findIndex((p) => p.id == req.params.id);
  if (index !== -1) {
    products[index] = { id: Number(req.params.id), ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE a product
router.delete("/:id", (req, res) => {
  const index = products.findIndex((p) => p.id == req.params.id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = router;
