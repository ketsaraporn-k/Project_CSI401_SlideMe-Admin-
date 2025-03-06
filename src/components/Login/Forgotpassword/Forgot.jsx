import React, { useState } from "react";
import logo from "../../../imgs/logo1.png";
import "./Forgot.css";
import { useNavigate } from "react-router-dom";
function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    if (email.includes('@')) {
      Swal.fire({
        title: "กู้คืนรหัสผ่านสำเร็จ!",
        text: "คลิก Ok เพื่อไปหน้าล็อคอิน",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => navigate("/"));
    } else {
      Swal.fire({
        title: "ข้อมูลไม่ถูกต้อง",
        text: "กรุณาตรวจสอบอีเมลของคุณ",
        icon: "error",
      });
    }
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header text-center">
          <img src={logo} alt="Logo" className="logo" />
          <p className="login-detail">กรุณากรอกอีเมลของคุณเพื่อดำเนินการต่อ</p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ fontSize: "15px", fontWeight: "bold"}}>
              Email address:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="อีเมล"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-success w-100"
          >
            รีเซ็ตรหัสผ่าน
          </button>

          <button
            onClick={() => navigate("/")}
            type="submit"
            className="btn btn-dark w-100 mt-2"
          >
            กลับ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
