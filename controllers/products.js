const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  products.push({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description
  });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
};
