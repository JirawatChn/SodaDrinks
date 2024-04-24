import { useEffect, useState, useRef } from "react";
import { Body } from "../../../Components/Body";
import { Footer } from "../../../Components/Footer";
import { Head } from "../../../Components/Head";
import { Layout } from "../../../Components/Layout";
import { Nav } from "../../../Components/Nav";
import { Total } from "../../../Components/table";
import { fetch_DV } from "../../../Components/data/data_d";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Delivery = ({
  ddRaw,
  setDdRaw,
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
  // const [ddRaw, setDdRaw] = useState([])
  const [dd, setDd] = useState([]);
  const [amount, setAmount] = useState(0);
  const [show, setShow] = useState(false);
  const onlyColor = useRef();
  const [onlyWaiting, setOnlyWaiting] = useState(false);


  // useEffect(() => {
  //     setDdRaw(fetch_DV)
  // }, [])

  useEffect(() => {
    const selectItem = ddRaw.filter((data) => {
      return !onlyWaiting || !data.Status;
    });
    setDd(selectItem);
    setAmount(selectItem.length);
  }, [ddRaw, onlyWaiting]);

  useEffect(() => {
    setNumPages(Math.ceil(dd.length / showtable));
  }, [dd, showtable]);

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

  const ConfirmClick = (id) => {
    const selectedItem = ddRaw.find((data) => {
      return data.id == id;
    });
    selectedItem.Status = true;
    // console.log(selectedItem)
    setDdRaw([...ddRaw]);
  };

  const DeleteClick = (id) => {
    const selectedItem = ddRaw.filter((data) => {
      return data.id !== id;
    });
    setDdRaw(selectedItem);
  };

  const tableData = dd.map((data, i) => {
    const start = (curPage - 1) * showtable;
    const end = start + showtable;

    if (start <= i && i < end) {
      return (
        <tr key={data.id}>
          <td style={{ color: "#63468E", textAlign: "center" }}>{data.id}</td>
          <td>
            <Link
              to={"/detailDelivery"}
              style={{ color: "#63468E", textDecoration: "underline" }}
            >
              {data.Delivery_ID}
            </Link>
          </td>
          <td style={{ color: "#63468E" }}>{data.DATE}</td>
          <td style={{ color: "#63468E" }}>{data.P_NAME}</td>
          <td style={{ color: "#63468E", textAlign: "center" }}>
            {data.Contact}
          </td>
          <td style={{ color: "#63468E", textAlign: "center" }}>
            {data.Amount}
          </td>
          <td style={{ color: "#63468E", textAlign: "center" }}>
            {data.Status ? (
              <span className="text-success">สำเร็จ</span>
            ) : (
              <span className="text-warning">กำลังรอ</span>
            )}
          </td>
          <td>
            <Button
              className="btn-success"
              href="#/Confirm"
              onClick={() => ConfirmClick(data.id)}
            >
              <i className="bi bi-check-lg"></i>
            </Button>
          </td>
          <td>
            <Button
              href="#/Delete"
              className="btn-danger"
              onClick={() => {
                DeleteClick(data.id);
              }}
            >
              <i className="bi bi-trash3"></i>
            </Button>
          </td>
        </tr>
      );
    }
  });

  const DeliveryBox = () => {
    const handleChange = (event) => {
      const value = parseInt(event.target.value);
      setSelectedValue(value);
      setShowtable(value); // ปรับค่า showtable เมื่อมีการเลือกค่าใน dropdown
      setCurPage(1); // ให้กลับไปที่หน้าที่ 1 เมื่อเปลี่ยนค่า showtable
    };

    const buttonPage = () => {
      const buttons = [];
      const numButtons = Math.ceil(dd.length / showtable); // หาจำนวนหน้าทั้งหมด
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
    return (
      <div>
        <Total amount={amount} name="ขนส่ง" address="/addDelivery" setShow={setShow} show={show}/>
        <div className="card shadow mb-3">
          <div className="card-body">
            <div>
              <p style={{ color: "black", marginBottom: "0px" }}>ทั้งหมด</p>
            </div>
            <br />
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={onlyWaiting}
                onChange={(e) => {
                  setOnlyWaiting(e.target.checked);
                }}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {" "}
                <span
                  ref={onlyColor}
                  className={onlyWaiting ? "text-success" : ""}
                >
                  แสดงเฉพาะ
                </span>{" "}
                <span className="text-warning" style={{ marginLeft: "5px" }}>
                  กำลังรอ
                </span>
              </label>
            </div>
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
                    <th style={{ width: "17%", paddingLeft: "30px" }}>
                      รหัสรายการขนส่ง
                    </th>
                    <th style={{ width: "17%" }}>วันที่</th>
                    <th style={{ width: "17%" }}>ชื่อสินค้า</th>
                    <th style={{ width: "17%", textAlign: "center" }}>
                      ชื่อผู้รับ
                    </th>
                    <th style={{ width: "17%", textAlign: "center" }}>
                      จำนวนรายการ
                    </th>
                    <th style={{ width: "10%", textAlign: "center" }}>สถานะ</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "left" }}>{tableData}</tbody>
              </table>
            </div>
            <div style={{ position: "relative", textAlign: "left" }}>
              <div style={{ justifyContent: "center" }}>{buttonPage()}</div>
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
      </div>
    );
  };

  return (
    <div id="wrapper">
      <Nav actived="delivery" iconActive={{ opacity: "100%" }} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Head topbar="Delivery / การขนส่ง" />
          <Body heading="บริการขนส่ง" table={<DeliveryBox />} />
          <Footer />
        </div>
      </div>
      <div className="loader" id="loader"></div>
    </div>
  );
};
