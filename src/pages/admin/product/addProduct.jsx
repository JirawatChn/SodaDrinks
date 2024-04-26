import React, { useEffect, useRef, useState } from "react";
import { Body } from "../../../Components/Body";
import { Head } from "../../../Components/Head";
import { Nav } from "../../../Components/Nav";
import { Link, useNavigate } from "react-router-dom";
export const AddProduct = ({ warehouseRaw, setWarehouseRaw }) => {
  const id_product = useRef();
  const product_name = useRef();
  const quantity = useRef();
  const id_warehouse = useRef();
  const weight = useRef();
  const size = useRef();

  const [warehouse, setWarehouse] = useState([]);
  const [warehouseLenght, setWarehouseLenght] = useState(0);

  useEffect(() => {
    setWarehouse(warehouseRaw);
    setWarehouseLenght(warehouseRaw.length);
  }, [warehouseRaw]);

  const goto = useNavigate();

  const createProduct = () => {
    addProduct();
    goto("/product");
    window.location.reload();
  };

  const addProduct = async () => {
    if (!id_product.current.value) {
      alert("กรุณากรอกรหัสสินค้า");
      return;
    } else {
      try {
        const newData = await fetch("http://localhost:5000/addProduct", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            id_product: id_product.current.value,
            product_name: product_name.current.value,
            quantity: parseInt(quantity.current.value),
            id_warehouse: id_warehouse.current.value,
            weight: parseInt(weight.current.value),
            size: parseInt(size.current.value),
          }),
        }).then((res) => res.json());
        console.log(newData);
        console.log("a");
      } catch (error) {
        console.error("Error adding product data:", error);
      }
    }
  };

  //   useEffect(()=>{
  //     goto('/product')
  //   },[addProduct])

  const back = () => {
    return (
      <div>
        <Link to={"/product"}>
          <p style={{ color: "#63468E", fontSize: "1rem", fontWeight: "400" }}>
            <i className="bi bi-chevron-left"></i>
            สินค้าทั้งหมด
          </p>
        </Link>
      </div>
    );
  };

  const AddProductBox = () => {

    const warehouseValue = () => {
      return (
        <select ref={id_warehouse}>
          {warehouse.map(item => (
            <option key={item.id_warehouse} value={item.id_warehouse}>
              {item.id_warehouse}
            </option>
          ))}
        </select>
      );
    };

    return (
      <div>
        <div>
          <h1
            className="h4 mb-2"
            style={{ color: "black", fontWeight: "bold" }}
          >
            นำสินค้าเข้าใหม่
          </h1>
        </div>

        <div className="card shadow mb-3">
          <div className="card-body" style={{ height: "600px" }}>
            <div className="row" style={{ paddingLeft: "20px" }}>
              <div className="topbar-divider d-none d-sm-block">
                <p style={{ color: "black", fontWeight: "600" }}>
                  <img
                    src="./img/Group 5.png"
                    alt="icon"
                    style={{ marginRight: "10px" }}
                  />
                  รายละเอียดสินค้า
                </p>
              </div>
            </div>
            <div style={{ paddingLeft: "23px" }}>
              <div className="row" style={{ height: "47px" }}>
                <div className="col-md-2">
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: "10px", fontWeight: "400" }}>
                        รหัสสินค้า:
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="input-group input-group-sm mb-3">
                    <input
                      name="id_product"
                      type="text"
                      className="form-control"
                      placeholder="ตัวอย่าง P001"
                      ref={id_product}
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <p style={{ marginRight: "10px", fontWeight: "400" }}> </p>
                  </div>
                </div>
              </div>
              <div className="row" style={{ top: "100%" }}>
                <div className="col-md-2">
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: "10px", fontWeight: "400" }}>
                        ชื่อสินค้า:
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="input-group input-group-sm mb-3">
                    <input
                      name="product_name"
                      type="text"
                      className="form-control"
                      placeholder="ตัวอย่าง Product A"
                      ref={product_name}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: "10px", fontWeight: "400" }}>
                        จำนวน:{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="input-group input-group-sm mb-3">
                    <input
                      name="quantity"
                      type="number"
                      className="form-control"
                      placeholder="ตัวอย่าง 0"
                      ref={quantity}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: "10px", fontWeight: "400" }}>
                        รหัสคลังสินค้า:{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="input-group input-group-sm mb-3">
                    {/* <input
                      name="id_warehouse"
                      type="text"
                      className="form-control"
                      placeholder="ตัวอย่าง W001"
                      ref={id_warehouse}
                    /> */}
                    {warehouseValue()}
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row" style={{ paddingLeft: "20px" }}>
              <div className="topbar-divider d-none d-sm-block">
                <p style={{ color: "black", fontWeight: "600" }}>
                  <img
                    src="./img/Group 5.png"
                    alt="icon"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  ข้อมูลขนส่ง
                </p>
              </div>
            </div>
            <div style={{ paddingLeft: "23px" }}>
              <div className="row">
                <div className="col-md-2">
                  <br />
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "50%",
                      color: "black",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: "10px", fontWeight: "400" }}>
                        น้ำหนัก (กรัม)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <br />
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <div className="input-group input-group-sm mb-3">
                      <input
                        name="weight"
                        type="number"
                        className="form-control"
                        placeholder="ตัวอย่าง 0"
                        ref={weight}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <br />
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: "10px", fontWeight: "400" }}>
                        ขนาด (ซม.)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <br />
                  <div
                    style={{
                      clear: "both",
                      float: "left",
                      width: "100%",
                      color: "black",
                    }}
                  >
                    <div className="input-group input-group-sm mb-3">
                      <input
                        name="size"
                        type="number"
                        className="form-control"
                        placeholder="ตัวอย่าง 0"
                        ref={size}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ paddingLeft: "1400px" }}>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={() => createProduct()}
                  style={{
                    borderRadius: "60px",
                    height: "43px",
                    width: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <span className="text" style={{ margin: "0 auto" }}>
                    สร้างรายการ
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="wrapper">
      <Nav actived="product" iconActive={{ opacity: "100%" }} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Head topbar="Product / สินค้า" />
          <Body heading={back()} table={<AddProductBox />} />
        </div>
      </div>
      <div className="loader" id="loader"></div>
    </div>
  );
};
