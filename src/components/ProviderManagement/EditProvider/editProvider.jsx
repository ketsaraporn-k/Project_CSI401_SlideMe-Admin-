import "./editProvider.css";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import providerDummyData from "../../../data/providersDummyData";

function EditProvider() {
  const navigate = useNavigate();
  const { providerId } = useParams(); // รับ providerId จาก URL
  const provider = providerDummyData.find((p) => p.id === parseInt(providerId)); // หา provider ตาม ID

  const [formData, setFormData] = useState({
    name: provider?.name || "",
    surname: provider?.surname || "",
    email: provider?.email || "",
    phoneNumber: provider?.phoneNumber || "",
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
    const updatedProviders = providerDummyData.map((p) =>
      p.id === parseInt(providerId) ? { ...p, ...formData } : p
    );

    console.log("Updated Providers:", updatedProviders); // ตรวจสอบข้อมูลที่แก้ไขใน console
    // กลับไปที่หน้า ProviderManagement
    navigate("/providermanagement", { state: { providers: updatedProviders } });
  };

  return (
    <div className="editProvider-container">
      <h3 style={{ margin: "0.5rem" }}>แก้ไขบัญชีผู้ให้บริการ</h3>
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
          name="phoneNumber"
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
          onClick={() => navigate("/providermanagement")}
          className="cancel"
          style={{ width: "90px", height: "33px", borderRadius: "10px" }}
        >
          ยกเลิก
        </button>
      </div>
    </div>
  );
}

export default EditProvider;
