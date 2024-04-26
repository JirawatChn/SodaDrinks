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
  } catch (error) {
    console.log(error);
  }
};

// ฟังก์ชันสำหรับเพิ่ม Product
const addProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (error) {
    console.log(error);
  }
};

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
  } catch (error) {
    console.log(error);
  }
};

// ฟังก์ชันสำหรับดึงข้อมูล Customer
const getCustomer = async () => {
  try {
    const customers = await Customer.find();
    return customers;
  } catch (error) {
    console.log(error);
  }
};

// ฟังก์ชันสำหรับดึงข้อมูล Order
const getOrder = async () => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  Product,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  getWarehouse,
  getCustomer,
  getOrder,
};
