import { useEffect, useState } from "react";
import { Body } from "../../../Components/Body";
import { Footer } from "../../../Components/Footer";
import { Head } from "../../../Components/Head";
import { Layout } from "../../../Components/Layout";
import { Nav } from "../../../Components/Nav";
import { Total } from "../../../Components/table";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Customer = ({
  dcRaw,
  setDcRaw,
  showtable,
  setShowtable,
  curPage,
  numPages,
  selectedValue,
  setSelectedValue,
  PageValue1,
  PageValue2,
  PageValue3,
  setNumPages,
  setCurPage,
}) => {
  const [dc, setDc] = useState([]);
  const [amount, setAmount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const limitTel = 2;
  const [currentTel, setCurrentTel] = useState(2);
  const [telList, setTelList] = useState([]);

  useEffect(() => {
    setDc(dcRaw);
    setAmount(dcRaw.length);
  }, [dcRaw]);

  useEffect(() => {
    setNumPages(Math.ceil(dc.length / showtable));
  }, [dc, showtable]);

  useEffect(() => {
    if (numPages === 0) {
      setCurPage(0);
    } else {
      if (curPage === 0) {
        setCurPage(1);
      } else if (curPage > numPages) {
        setCurPage(numPages);
      }
    }
  }, [curPage, numPages]);

  const DeleteClick = (id) => {
    const selectedItem = dcRaw.filter((data) => {
      return data.id !== id;
    });
    setDcRaw(selectedItem);
  };

  const tableData = dc.map((data, i) => {
    const start = (curPage - 1) * showtable;
    const end = start + showtable;

    if (start <= i && i < end)
      return (
        <tr key={data.id}>
          <td style={{ color: "#63468E", textAlign: "center" }}>{data.id}</td>
          <td style={{ color: "#63468E", paddingLeft: "50px" }}>
            <Link
              to={{
                pathname: "/detailCustomer",
                state: {
                  customerId: data.CUS_ID,
                  currentTel: currentTel,
                },
              }}
              style={{ color: "#63468E", textDecoration: "underline" }}
            >
              {data.CUS_ID}
            </Link>
          </td>
          <td style={{ color: "#63468E" }}>{data.C_NAME}</td>
          <td style={{ color: "#63468E", textAlign: "center" }}>{data.Tel}</td>
          <td style={{ color: "#63468E", textAlign: "center" }}>
            {data.Email}
          </td>
          <td style={{ display: "flex", gap: "5px" }}>
            <Button
              style={{
                background: "#ffcc00",
                color: "#fff",
                border: "transparent",
                width: 52,
              }}
              as={Link}
              to="/editProduct"
            >
              <i
                style={{ width: 26, height: 26 }}
                className="bi bi-pencil-square"
              ></i>
            </Button>
            <Button
              href="#/Delete"
              style={{
                background: "#FF0000",
                color: "#fff",
                border: "transparent",
                width: "52px", // Added quotes to fix syntax
              }}
              onClick={() => {
                DeleteClick(data.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </Button>
          </td>
        </tr>
      );
  });

  const Customerbox = () => {
    const handleChange = (event) => {
      const value = parseInt(event.target.value);
      setSelectedValue(value);
      setShowtable(value); // ปรับค่า showtable เมื่อมีการเลือกค่าใน dropdown
      setCurPage(1); // ให้กลับไปที่หน้าที่ 1 เมื่อเปลี่ยนค่า showtable
    };

    const buttonPage = () => {
      const buttons = [];
      const numButtons = Math.ceil(dc.length / showtable); // หาจำนวนหน้าทั้งหมด
      if (curPage <= numPages && curPage != 1) {
        buttons.push(
          <button
            key={9999}
            className="btn btn-primary button-spacing"
            onClick={() => setCurPage(curPage - 1)}
          >
            Prev
          </button>
        );
      }
      for (let i = 1; i <= numButtons; i++) {
        buttons.push(
          <button
            key={i}
            className={
              "btn " +
              (curPage === i ? "btn-primary" : "btn-outline-primary") +
              " button-spacing"
            }
            onClick={() => setCurPage(i)}
          >
            {i}
          </button>
        );
      }
      if (curPage < numPages) {
        buttons.push(
          <button
            key={999}
            className="btn btn-primary button-spacing"
            onClick={() => setCurPage(curPage + 1)}
          >
            Next
          </button>
        );
      }
      return buttons;
    };

    const addTel = () => {
      if (telList.length < limitTel) {
        setCurrentTel((prevTel) => prevTel + 1);
        setTelList((prevList) => [...prevList, currentTel]);
      }
    };

    const labelTel = () => {
      return telList.map((tel, index) => (
        <div key={index}>
          <div className="row" style={{ paddingLeft: "50px" }}>
            <div className="col-sm-4" style={{ color: "#63468E" }}>
              <div className="input-group input-group-sm mb-3">
                <p>เบอร์โทรศัพท์ {tel}</p>
              </div>
            </div>
            <div className="col-sm-6" style={{ color: "#63468E" }}>
              <div className="input-group input-group-sm mb-3">
                <input
                  id="txtTel"
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="062-xxx-xxxx"
                />
              </div>
            </div>
            <i
              className="bi bi-dash-circle-fill text-danger hover"
              style={{ fontSize: "25px" }}
              onClick={() => {
                deleteTel(index);
              }}
            ></i>
          </div>
        </div>
      ));
    };

    const deleteTel = () => {
      if (telList.length > 0) {
        const updatedList = [...telList];
        updatedList.pop();
        setTelList(updatedList);
        setCurrentTel((prevTel) => prevTel - 1);
      }
    };

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              เพิ่มลูกค้าใหม่
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <p
                    style={{
                      paddingLeft: "50px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    <img
                      src="./img/Group 53.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />{" "}
                    ลูกค้า
                  </p>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>รหัส</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        id="txtID"
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="C0001"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>ชื่อ</p>
                      <p style={{ color: "red" }}>*</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        id="txtName"
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="ตัวอย่างลูกค้า 1"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      paddingLeft: "50px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    <img
                      src="./img/Group 54.png"
                      width="40px"
                      height="40px"
                      style={{ marginRight: "10px" }}
                    />{" "}
                    ข้อมูลลูกค้า
                  </p>
                  <div className="row" style={{ paddingLeft: "50px" }}>
                    <div className="col-sm-4" style={{ color: "#63468E" }}>
                      <div className="input-group input-group-sm mb-3">
                        <p>ชื่อลูกค้า</p>
                      </div>
                    </div>
                    <div className="col-sm-6" style={{ color: "#63468E" }}>
                      <div className="input-group input-group-sm mb-3">
                        <input
                          id="txtCompany"
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="บริษัท 1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>เบอร์โทรศัพท์</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        id="txtTel"
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="062-xxx-xxxx"
                      />
                    </div>
                  </div>
                  <i
                    className="bi bi-plus-circle-fill hover"
                    style={{ color: "#63468e", fontSize: "25px" }}
                    onClick={() => {
                      addTel();
                    }}
                  ></i>
                </div>

                {labelTel()}

                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>อีเมล</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        id="txtMail"
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="sg-epk@gmail.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>จังหวัด</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div>
                      <div className="input-group input-group-sm mb-3">
                        <select
                          className="form-select"
                          style={{ width: "300px" }}
                          id="inputGroupSelect01"
                        ></select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>อำเภอ/เขต</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div>
                      <div className="input-group input-group-sm mb-3">
                        <select
                          className="form-select"
                          style={{ width: "300px" }}
                          id="inputGroupSelect02"
                        ></select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>ตำบล/แขวง</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div>
                      <div className="input-group input-group-sm mb-3">
                        <select
                          className="form-select"
                          style={{ width: "300px" }}
                          id="inputGroupSelect03"
                        ></select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>รหัสไปรษณีย์</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <div id="zipCodeDisplay" className="form-control">
                        รหัสไปรษณีย์
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingLeft: "50px" }}>
                  <div className="col-sm-4" style={{ color: "#63468E" }}>
                    <div className="input-group input-group-sm mb-3">
                      <p>ที่อยู่</p>
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ color: "#63468E" }}>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="txtAddress"
                        rows="5"
                        placeholder="ที่อยู่"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Total
          amount={amount}
          name="เพิ่มลูกค้า"
          show={show}
          setShow={setShow}
        />
        <div className="card shadow mb-3">
          <div className="card-body">
            <div>
              <p style={{ color: "black" }}>ทั้งหมด</p>
            </div>
            <br />
            <div className="table-responsive">
              <table
                className="table table-bordered table-striped"
                id="dataTable"
                width="100%"
                cellSpacing="0"
                style={{ margin: "0 auto" }}
              >
                <thead>
                  <tr
                    style={{
                      textAlign: "left",
                      backgroundColor: "#b8adc979",
                      color: "#63468E",
                    }}
                  >
                    <th style={{ width: "5%", textAlign: "center" }}>#</th>
                    <th style={{ width: "23.75%", paddingLeft: "50px" }}>
                      รหัส
                    </th>
                    <th style={{ width: "23.75%" }}>ชื่อสินค้า</th>
                    <th style={{ width: "23.75%", textAlign: "center" }}>
                      เบอร์โทรศัพท์{" "}
                    </th>
                    <th style={{ width: "23.75%", textAlign: "center" }}>
                      E-mail
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "left" }}>{tableData}</tbody>
              </table>
            </div>
            <div style={{ position: "relative", textAlign: "left" }}>
              <div style={{ marginTop: "auto" }}>{buttonPage()}</div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "70px",
                  transform: "translate(50%, 0)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>จำนวนต่อหน้า</div>
                <select
                  style={{ right: "0px" }}
                  className="form-select"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <option value={PageValue1}>{PageValue1}</option>
                  <option value={PageValue2}>{PageValue2}</option>
                  <option value={PageValue3}>{PageValue3}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div id="wrapper">
      <Nav actived="customer" iconActive={{ opacity: "100%" }} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Head topbar="Customer / ลูกค้า" />
          <Body heading="ผู้ติดต่อ" table={<Customerbox />} />
          <Footer />
        </div>
      </div>
      <div className="loader" id="loader"></div>
    </div>
  );
};
