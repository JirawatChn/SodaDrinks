import React, { useEffect, useRef, useState } from "react";
import { Body } from "../../../Components/Body";
import { Head } from "../../../Components/Head";
import { Nav } from "../../../Components/Nav";
import { Footer } from "../../../Components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export const EditProduct = ({ warehouseRaw, setWarehouseRaw }) => {
  const goto = useNavigate();
  const location = useLocation();
  const [locationState, setLocationState] = useState({
    id_product: "",
    product_name: "",
    quantity: 0,
    id_warehouse: "",
    weight: 0,
    size: 0,
  });

  const new_id_product = useRef();
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("location", location);
    if (location.state) {
      setLocationState(location.state);
    }
  }, [location]);

  const deleteProduct = (id) =>{
    setShow(false);
    deleteProductData(id);
    goto("/product");
    window.location.reload();
  }

  const deleteProductData = async (id_product) => {
    try {
      const newData = await fetch("http://localhost:5000/deleteProduct", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id_product: id_product,
        }),
      });
      const deletedData = await newData.json();
      console.log("Product deleted:", deletedData);
    } catch (error) {
      console.error("Error deleting product data:", error);
    }
  };

  const updateProduct = async () => {
    if (!new_id_product.current.value) {
      alert("กรุณากรอกรหัสสินค้า");
      return;
    } else {
      try {
        const newData = await fetch("http://localhost:5000/updateProduct", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            id_product: locationState.id_product,
            new_id_product: new_id_product.current.value,
            product_name: product_name.current.value,
            quantity: parseInt(quantity.current.value),
            id_warehouse: id_warehouse.current.value,
            weight: parseInt(weight.current.value),
            size: parseInt(size.current.value)
          }),
        }).then((res) => res.json());
        console.log(newData);        
      } catch (error) {
        console.error("Error adding product data:", error);
      }
    }
  };

  const editProductData = () =>{
    updateProduct()
    goto('/product')
    window.location.reload()
  }

  const back = () => {
    return (
      <div>
        <Link
          to="/detailProduct"
          state={{
            id_product: locationState.id_product,
            product_name: locationState.product_name,
            quantity: locationState.quantity,
            id_warehouse: locationState.id_warehouse,
            weight: locationState.weight,
            size: locationState.size,
          }}
        >
          <p style={{ color: "#63468E", fontSize: "1rem", fontWeight: "400" }}>
            <i className="bi bi-chevron-left"></i>
            รายละเอียดสินค้า
          </p>
        </Link>
      </div>
    );
  };

  const EditProductBox = () => {

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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ยืนยันการลบสินค้า</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>ยืนยันการลบสินค้า {locationState.product_name}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              ปิด
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                deleteProduct(locationState.id_product);
              }}
            >
              ยืนยัน
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1
            className="h3 font-weight-bold mb-0 text-black-800"
            style={{ color: "black" }}
          >
            แก้ไขข้อมูล {locationState.product_name}
          </h1>
        </div>
        <Button
          style={{ marginBottom: "10px" }}
          href="#/Delete"
          className="btn-danger"
          onClick={() => {
            setShow(true)
          }}
        >
          <i className="bi bi-trash3"></i> ลบข้อมูล
        </Button>
        <div className="card shadow mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="topbar-divider d-none d-sm-block"></div>
                <div>
                  <div>
                    <div style={{ float: "left", width: "40%" }}>
                      <img
                        style={{ width: "190px", height: "190px" }}
                        src="./img/bg-1.jpg"
                        alt="Product Image"
                      />
                    </div>
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <div className="col-sm-8">
                        <div
                          style={{
                            clear: "both",
                            float: "left",
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p
                              style={{ marginRight: "10px", fontWeight: "600" }}
                            >
                              ชื่อสินค้า
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            defaultValue={locationState.product_name}
                            ref={product_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <div className="col-sm-8">
                        <div
                          style={{
                            clear: "both",
                            float: "left",
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p
                              style={{ marginRight: "10px", fontWeight: "600" }}
                            >
                              รหัสสินค้า
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            defaultValue={locationState.id_product}
                            ref={new_id_product}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <div className="col-sm-8">
                        <div
                          style={{
                            clear: "both",
                            float: "left",
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p
                              style={{ marginRight: "10px", fontWeight: "600" }}
                            >
                              จำนวน
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            defaultValue={locationState.quantity}
                            ref={quantity}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <div className="col-sm-8">
                        <div
                          style={{
                            clear: "both",
                            float: "left",
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p
                              style={{ marginRight: "10px", fontWeight: "600" }}
                            >
                              รหัสคลังสินค้า
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group input-group-sm mb-3">
                          {warehouseValue()}
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <div className="col-sm-8">
                        <div
                          style={{
                            clear: "both",
                            float: "left",
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p
                              style={{ marginRight: "10px", fontWeight: "600" }}
                            >
                              น้ำหนัก
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            defaultValue={locationState.weight}
                            ref={weight}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <div className="col-sm-8">
                        <div
                          style={{
                            clear: "both",
                            float: "left",
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p
                              style={{ marginRight: "10px", fontWeight: "600" }}
                            >
                              ไซส์
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            defaultValue={locationState.size}
                            ref={size}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginLeft: "470px", marginTop: "20px" }}>
                    <Button
                      className="btn btn-primary"
                      style={{
                        borderRadius: "60px",
                        height: "43px",
                        width: "150px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                      }}
                      onClick={()=> editProductData()}
                    >
                      <span className="text" style={{ margin: "0 auto" }}>
                        บันทึกรายการ
                      </span>
                    </Button>
                  </div>
                </div>
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
          <Head topbar="Product / รายการสินค้า" />
          <Body heading={back()} table={<EditProductBox />} />
          <Footer />
        </div>
      </div>
      <div className="loader" id="loader"></div>
    </div>
  );
};
