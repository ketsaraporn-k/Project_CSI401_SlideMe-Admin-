import "./editUser.css";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userDummyData from "../../../data/usersDummyData";

function EditUser() {
  const navigate = useNavigate();
  const { userId } = useParams(); // รับ userId จาก URL
  const user = userDummyData.find((u) => u.id === parseInt(userId)); // หา user ตาม ID

  const [formData, setFormData] = useState({
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // อัปเดตข้อมูลใน dummy data
    const updatedUsers = userDummyData.map((u) =>
      u.id === parseInt(userId) ? { ...u, ...formData } : u
    );

    console.log("Updated Users:", updatedUsers); // ตรวจสอบข้อมูลที่แก้ไขใน console
    // กลับไปที่หน้า UserManagement
    navigate("/usermanagement", { state: { users: updatedUsers } });
  };

  return (
    <div className="editUser-container">
      <h3 style={{ margin: "0.5rem" }}>แก้ไขบัญชีผู้ใช้</h3>
      <div className="form-group">
        <label>ชื่อ</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="ชื่อ"
        />
      </div>
      <div className="form-group">
        <label>นามสกุล</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="นามสกุล"
        />
      </div>
      <div className="form-group">
        <label>อีเมล</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="อีเมล"
        />
      </div>
      <div className="form-group">
        <label>เบอร์โทร</label>
        <input
          type="text"
          name="phoneNumber" // เปลี่ยนจาก "phone number" เป็น "phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="เบอร์โทร"
        />
      </div>

      <div className="buttons-container">
        <button
          onClick={handleSave}
          className="save"
          style={{
            backgroundColor: "#03D069",
            marginLeft: "1rem",
            width: "90px",
            height: "33px",
            borderRadius: "10px",
          }}
        >
          บันทึก
        </button>
        <button
          onClick={() => navigate("/usermanagement")}
          className="cancel"
          style={{ width: "90px", height: "33px", borderRadius: "10px" }}
        >
          ยกเลิก
        </button>
      </div>
    </div>
  );
}

export default EditUser;
