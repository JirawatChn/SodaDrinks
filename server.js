<<<<<<< HEAD
const { MongoClient } = require("mongodb");

const express = require("express"),
  dbOperation = require("./dbFiles/dbOperation"),
  mongodb = require("mongodb").MongoClient,
  cors = require("cors"),
  multer = require("multer");

const app = express();
app.use(cors());

const conn = "mongodb+srv://thanakritkhn:thanakritkhn@soda.9kiykrk.mongodb.net/"
const databaseName = "SODA"
var database

const API_PORT = process.env.PORT || 5000;

app.listen(API_PORT, () =>{
  MongoClient.connect(conn,(err,client)=>{
    database=client.db(databaseName)
    console.log('conn');
  })
});

=======
// var admin = require("firebase-admin");

// var serviceAccount = require("firebase-adminsdk-hxexc@sodadrinks-81c28.iam.gserviceaccount.com");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

const express = require("express"),
  dbOperation = require("./dbFiles/dbOperation"),
  cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// ------- Product --------------------

app.get("/product", async(req, res) => {
  try {
    let result = await dbOperation.getProduct();
    // console.log(result.recordset);
    res.send(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/addProduct", async(req, res) => {
    await dbOperation.addProduct(req.body);
    console.log('called addProduct');
});

app.delete("/deleteProduct", async(req, res) => {
  await dbOperation.deleteProduct(req.body.id_product);
  console.log('called deleteProduct');
});

app.put("/updateProduct", async(req,res)=>{
  await dbOperation.updateProduct(req.body);
  console.log('called updateProduct');
});

//------------------ Warehouse -----------------------
app.get("/warehouse", async(req, res) => {
  try {
    let result = await dbOperation.getWarehouse();
    // console.log(result.recordset);
    res.send(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

//-------------- Customer ----------------------------
app.get("/customer", async(req, res) => {
  try {
    let result = await dbOperation.getCustomer();
    // console.log(result.recordset);
    res.send(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/order", async(req, res) => {
  try {
    let result = await dbOperation.getOrder();
    // console.log(result.recordset);
    res.send(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));

>>>>>>> 2e556af41600521da97f5239413426e217febb7e
// dbOperation.getProduct().then((res) => {
//   console.log(res.recordset);
// });
