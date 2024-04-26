<<<<<<< HEAD
const mongoose = require('mongoose');

// สร้างโครงสร้างข้อมูลสำหรับ Product
const productSchema = new mongoose.Schema({
  id_product: String,
  product_name: String,
  quantity: Number,
  id_warehouse: String,
  weight: Number,
  size: Number
});

// สร้างโครงสร้างข้อมูลสำหรับ Warehouse
const warehouseSchema = new mongoose.Schema({
  id_warehouse: String
});

// สร้างโครงสร้างข้อมูลสำหรับ Customer
const customerSchema = new mongoose.Schema({
  id_Customer: String,
  name: String,
  tel: String,
  email: String
});

// สร้างโครงสร้างข้อมูลสำหรับ Order
const orderSchema = new mongoose.Schema({
  id_order: String,
  day: Date,
  product_name: String,
  customer_name: String,
  order_status: String
});

// สร้างโมเดล Product
const Product = mongoose.model('Product', productSchema);

// สร้างโมเดล Warehouse
const Warehouse = mongoose.model('Warehouse', warehouseSchema);

// สร้างโมเดล Customer
const Customer = mongoose.model('Customer', customerSchema);

// สร้างโมเดล Order
const Order = mongoose.model('Order', orderSchema);

// ฟังก์ชันสำหรับดึงข้อมูล Product
const getProduct = async () => {
  try {
    const products = await Product.find();
    return products;
=======
const config = require("./dbConfig"),
  sql = require("mssql");

const getProduct = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("select * from Product");
    // console.log(result);
    return result;
>>>>>>> 2e556af41600521da97f5239413426e217febb7e
  } catch (error) {
    console.log(error);
  }
};
<<<<<<< HEAD

// ฟังก์ชันสำหรับเพิ่ม Product
const addProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
=======
const addProduct = async (Product) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `insert into Product(id_product,product_name,quantity, id_warehouse, weight, size) values('${Product.id_product}','${Product.product_name}',${Product.quantity},'${Product.id_warehouse}',${Product.weight},${Product.size})`
      );
    return result;
>>>>>>> 2e556af41600521da97f5239413426e217febb7e
  } catch (error) {
    console.log(error);
  }
};
<<<<<<< HEAD

// ฟังก์ชันสำหรับลบ Product
const deleteProduct = async (id_product) => {
  try {
    const result = await Product.deleteOne({ id_product });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// ฟังก์ชันสำหรับอัปเดต Product
const updateProduct = async (id_product, newData) => {
  try {
    const result = await Product.updateOne({ id_product }, newData);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// ฟังก์ชันสำหรับดึงข้อมูล Warehouse
const getWarehouse = async () => {
  try {
    const warehouses = await Warehouse.find();
    return warehouses;
=======
const deleteProduct = async (id_product) => {
  try {
    console.log("Deleting product with id:", id_product);
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(`delete from Product where id_product = '${id_product}'`);
    return result;
  } catch (error) {
    console.log("Error deleting product:", error);
  }
};
const updateProduct = async (Product) => {
  try {
    console.log("Updating product with id:", Product.id_product);
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `update Product set id_product = '${Product.new_id_product}', id_warehouse = '${Product.id_warehouse}', product_name = '${Product.product_name}', weight = ${Product.weight}, size = ${Product.size}, quantity = ${Product.quantity} where id_product = '${Product.id_product}'`
      );
    return result;
  } catch (error) {
    console.log("Error updating product:", error);
  }
};

const getWarehouse = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query("select id_warehouse from warehouse");
    return result;
>>>>>>> 2e556af41600521da97f5239413426e217febb7e
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
// ฟังก์ชันสำหรับดึงข้อมูล Customer
const getCustomer = async () => {
  try {
    const customers = await Customer.find();
    return customers;
=======
const getCustomer = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        "select Customer.id_Customer,Customer.name,Customer_tel.tel,Customer.email from Customer,Customer_tel where Customer.id_Customer = Customer_tel.id_Customer"
      );
    return result;
>>>>>>> 2e556af41600521da97f5239413426e217febb7e
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
// ฟังก์ชันสำหรับดึงข้อมูล Order
const getOrder = async () => {
  try {
    const orders = await Order.find();
    return orders;
=======
const getOrder = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        "select orders.id_order,orders.day,Product.product_name,Customer.name,orders.order_status from Product, orders, Order_detail,Customer where orders.id_order = Order_detail.id_order and Order_detail.id_product = Product.id_product and orders.id_Customer = Customer.id_Customer"
      );
    return result;
>>>>>>> 2e556af41600521da97f5239413426e217febb7e
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
<<<<<<< HEAD
  Product,
=======
>>>>>>> 2e556af41600521da97f5239413426e217febb7e
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  getWarehouse,
  getCustomer,
  getOrder,
};
