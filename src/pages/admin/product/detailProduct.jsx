import React, { useEffect, useState } from "react";
import { Body } from "../../../Components/Body";
import { Head } from "../../../Components/Head";
import { Nav } from "../../../Components/Nav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Edit } from "../../../Components/component";
import { Button, Modal } from "react-bootstrap";

export const DetailProduct = () => {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("location", location);
    if (location.state) {
      setLocationState(location.state);
    }
  }, [location]);

  const deleteProduct = (id) => {
    setShow(false);
    deleteProductData(id);
    goto("/product");
    window.location.reload();
  };

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

  const DetailProductBox = () => {
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
            รายละเอียดสินค้า {locationState.product_name}
          </h1>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2"></div>
                  <div className="col-auto">
                    <div
                      className="text-xs font-weight-bold text-uppercase mb-1"
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      สินค้าลงเหลือ (ลัง)
                      <div
                        className="h5 mb-0 font-weight-bold font-size-20"
                        style={{ textAlign: "right" }}
                      >
                        <p
                          className={
                            locationState.quantity <= 100
                              ? "text-danger"
                              : locationState.quantity <= 200
                              ? "text-warning"
                              : "text-success"
                          }
                        >
                          {" "}
                          {locationState.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2"></div>
                  <div className="col-auto">
                    <div
                      className="text-xs font-weight-bold text-uppercase mb-1"
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      สินค้าเตรียมจัดส่ง (ลัง)
                      <div
                        className="h5 mb-0 font-weight-bold font-size-20 text-success"
                        style={{ textAlign: "right" }}
                      >
                        3 <p> </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2"></div>
                  <div className="col-auto">
                    <div
                      className="text-xs font-weight-bold text-uppercase mb-1"
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      ยอดส่งออกเดือนนี้ (ออเดอร์)
                      <div
                        className="h5 mb-0 font-weight-bold font-size-20"
                        style={{ textAlign: "right", color: "#4e3179" }}
                      >
                        1 <p> </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Button className="btn-warning" style={{ marginRight: "10px" }}>
            <Link
              to="/editProduct"
              state={{
                id_product: locationState.id_product,
                product_name: locationState.product_name,
                quantity: locationState.quantity,
                id_warehouse: locationState.id_warehouse,
                weight: locationState.weight,
                size: locationState.size,
              }}
              style={{
                color: "#ffffff",
                marginRight: "10px",
              }}
            >
              <i
                className="bi bi-pencil-square"
                style={{ marginRight: "10px" }}
              ></i>
              แก้ไขข้อมูล
            </Link>
          </Button>

          <Button
            href="#/Delete"
            className="btn-danger"
            onClick={() => {
              setShow(true);
            }}
          >
            <i className="bi bi-trash3"></i> ลบข้อมูล
          </Button>
        </div>
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

                    <div style={{ float: "left", width: "50%" }}>
                      <p style={{ color: "black", fontWeight: "600" }}>
                        {locationState.product_name}
                      </p>
                      <div>
                        <div>
                          <p style={{ fontWeight: "400" }}>รหัสสินค้า</p>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", color: "black" }}>
                            {locationState.id_product}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p style={{ fontWeight: "400" }}>จำนวน</p>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", color: "black" }}>
                            {locationState.quantity} ชิ้น
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p style={{ fontWeight: "400" }}>รหัสคลังสินค้า</p>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", color: "black" }}>
                            {locationState.id_warehouse}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p style={{ fontWeight: "400" }}>น้ำหนัก</p>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", color: "black" }}>
                            {locationState.weight} กรัม
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p style={{ fontWeight: "400" }}>ไซส์</p>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", color: "black" }}>
                            {locationState.size}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="topbar-divider d-none d-sm-block"></div>
                <div>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    <img
                      src="./img/Group 52.png"
                      alt="Product Icon"
                      style={{ marginRight: "10px" }}
                    />
                    ยอดสินค้าส่งออก
                  </p>
                  <div>
                    <div style={{ float: "left", width: "100%" }}>
                      <div
                        className="text-xs font-weight-bold text-uppercase mb-1"
                        style={{ color: "black", paddingLeft: "60px" }}
                      >
                        <div className="h-420 py-2 push-up-animation">
                          <div className="card-body">
                            <div className="mb-4">
                              <div className="chart-bar">
                                <canvas id="myBarChart"></canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
                <div className="card shadow mb-3">
                    <div className="card-body">
                        <div className="row">
                            <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', paddingLeft: '20px' }}>
                                รายงาน
                            </p>
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0"
                                    style={{ margin: '0 auto' }}>
                                    <thead>
                                        <tr className="center-align" style={{ backgroundColor: '#b8adc979', color: '#63468E' }}>
                                            <th>#</th>
                                            <th>วันที่</th>
                                            <th>ประเภท</th>
                                            <th>สถานะ</th>
                                            <th>รายการ</th>
                                            <th>จำนวน</th>
                                            <th>จาก</th>
                                            <th>ไป</th>
                                            <th>คงเหลือ</th>
                                        </tr>
                                    </thead>
                                    <tbody className="center-align">
                                        <tr>
                                            <td style={{ color: '#63468E' }}>1</td>
                                            <td style={{ color: '#63468E' }}>18/10/2023</td>
                                            <td style={{ color: '#63468E' }}>เบิก</td>
                                            <td style={{ color: '#63468E' }}>
                                                    <span className="text-light badge-pill badge-success"> สำเร็จ</span>
                                            </td>
                                            <td style={{ color: '#63468E' }}>EV-000-000-0005</td>
                                            <td style={{ color: '#63468E' }}>1</td>
                                            <td style={{ color: '#63468E' }}>คลังสินค้า</td>
                                            <td style={{ color: '#63468E' }}>ตัวอย่างที่อยู่ 1</td>
                                            <td style={{ color: '#63468E' }}>3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
    );
  };
  return (
    <div id="wrapper">
      <Nav actived="product" iconActive={{ opacity: "100%" }} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Head topbar="Product / รายการสินค้า" />
          <Body heading={back()} table={<DetailProductBox />} />
        </div>
      </div>
    </div>
  );
};
