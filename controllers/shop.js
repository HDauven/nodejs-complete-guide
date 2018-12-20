const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All products",
      path: "/products"
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    console.log(product);
  });
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All products",
      path: "/products"
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/"
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your cart",
    path: "/cart"
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Your orders",
    path: "/orders"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Checkout",
    path: "/checkout"
  });
};
