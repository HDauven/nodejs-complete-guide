const express = require("express");
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description
  });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
