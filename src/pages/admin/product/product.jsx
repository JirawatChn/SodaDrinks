import { useEffect, useRef, useState } from "react";
import { Body } from "../../../Components/Body";
import { Head } from "../../../Components/Head";
import { Layout } from "../../../Components/Layout";
import { Nav } from "../../../Components/Nav";
import { fetch_DP } from "../../../Components/data/data_p";
import { Footer } from "../../../Components/Footer";
import { Total } from "../../../Components/table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export const Product = ({
  dpRaw,
  setDpRaw,
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
  // const [dpRaw, setDpRaw] = useState([])
  const [dp, setDp] = useState([]);
  const [amount, setAmount] = useState(0);

  // useEffect(()=>{
  //     const fetchData = fetch_DP()
  //     setDpRaw(fetchData)
  // },[])

  useEffect(() => {
    setDp(dpRaw);
    setAmount(dpRaw.length);
  }, [dpRaw]);

  useEffect(() => {
    setNumPages(Math.ceil(dp.length / showtable));
  }, [dp, showtable]);

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
    const selectedItem = dpRaw.filter((data) => {
      return data.id !== id;
    });
    setDpRaw(selectedItem);
  };

  const tableData = dp.map((data, i) => {
    const start = (curPage - 1) * showtable;
    const end = start + showtable;

    if (start <= i && i < end)
      return (
        <tr key={data.id}>
          <td style={{ color: "#63468E", textAlign: "center" }}>{data.id}</td>
          <td style={{ color: "#63468E", paddingLeft: "50px" }}>
            <Link
              to={"/detailProduct"}
              style={{ color: "#63468E", textDecoration: "underline" }}
            >
              {data.P_ID}
            </Link>
          </td>
          <td style={{ color: "#63468E" }}>{data.P_NAME}</td>
          <td
            style={{ textAlign: "center" }}
            className={
              data.amount === 0
                ? "text-danger"
                : data.amount <= 15
                ? "text-warning"
                : "text-success"
            }
          >
            {data.amount}
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

  const Productbox = () => {
    const handleChange = (event) => {
      const value = parseInt(event.target.value);
      setSelectedValue(value);
      setShowtable(value); // ปรับค่า showtable เมื่อมีการเลือกค่าใน dropdown
      setCurPage(1); // ให้กลับไปที่หน้าที่ 1 เมื่อเปลี่ยนค่า showtable
    };

    const buttonPage = () => {
      const buttons = [];
      const numButtons = Math.ceil(dp.length / showtable); // หาจำนวนหน้าทั้งหมด
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
        <Total amount={amount} name="เพิ่มสินค้า" address="/addProduct" />
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
                    <th style={{ width: "45%", paddingLeft: "50px" }}>รหัส</th>
                    <th style={{ width: "40%" }}>ชื่อสินค้า</th>
                    <th style={{ width: "10%", textAlign: "center" }}>
                      คงเหลือ
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
      </div>
    );
  };

  return (
    <div id="wrapper">
      <Nav actived="product" iconActive={{ opacity: "100%" }} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Head topbar="Product / สินค้า" />
          <Body heading="สินค้าทั้งหมด" table={<Productbox />} />
          <Footer />
        </div>
      </div>
      <div className="loader" id="loader"></div>
    </div>
    // <Layout actived='product' iconActive={{ opacity: '100%' }} topbar='Product / สินค้า' heading='สินค้าทั้งหมด' table={<Productbox />} />
  );
};
