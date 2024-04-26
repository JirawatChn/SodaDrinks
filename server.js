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

// dbOperation.getProduct().then((res) => {
//   console.log(res.recordset);
// });
