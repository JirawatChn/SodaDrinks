const config = require("./dbConfig"),
  sql = require("mssql");

const getProduct = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("select * from Product");
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const addProduct = async (Product) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `insert into Product(id_product,product_name,quantity, id_warehouse, weight, size) values('${Product.id_product}','${Product.product_name}',${Product.quantity},'${Product.id_warehouse}',${Product.weight},${Product.size})`
      );
    return result;
  } catch (error) {
    console.log(error);
  }
};
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
  } catch (error) {
    console.log(error);
  }
};

const getCustomer = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        "select Customer.id_Customer,Customer.name,Customer_tel.tel,Customer.email from Customer,Customer_tel where Customer.id_Customer = Customer_tel.id_Customer"
      );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getOrder = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        "select orders.id_order,orders.day,Product.product_name,Customer.name,orders.order_status from Product, orders, Order_detail,Customer where orders.id_order = Order_detail.id_order and Order_detail.id_product = Product.id_product and orders.id_Customer = Customer.id_Customer"
      );
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  getWarehouse,
  getCustomer,
  getOrder,
};
