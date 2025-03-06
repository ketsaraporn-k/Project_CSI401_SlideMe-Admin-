import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./EditAdminAccount.css";

const EditAdminAccount = () => {
  const { id } = useParams(); // รับ ID จาก URL
  const navigate = useNavigate();

  // ตัวอย่างข้อมูล Admin ที่มีอยู่
  const [adminList, setAdminList] = useState([
    { id: 1, firstName: "John", lastName: "Doe", phone: "123456789", email: "john@example.com" },
    { id: 2, firstName: "Jane", lastName: "Smith", phone: "987654321", email: "jane@example.com" },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  // ค้นหาข้อมูล Admin จาก ID และเติมลงในฟอร์ม
  useEffect(() => {
    const admin = adminList.find((admin) => admin.id === parseInt(id));
    if (admin) {
      setFormData(admin);
    }
  }, [id, adminList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "ยืนยันที่จะบันทึกข้อมูล?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "เสร็จสิ้น!",
          text: "",
          icon: "success"
        }).then(()=>navigate('/adminmanagement'))
      }
    });

    console.log("Updated Admin Data:", formData);
    // ตัวอย่าง: อัปเดตข้อมูลใน `adminList` (สามารถเชื่อม API ได้ในขั้นตอนนี้)
    /* setAdminList((prevList) =>
      prevList.map((admin) =>
        admin.id === parseInt(id) ? { ...admin, ...formData } : admin
      )
    );
    navigate("/adminmanagement"); */ // นำทางกลับไปที่หน้า Admin Management
  };

  return (
    <div className="admin-management-container">
      <h2>Edit Admin Account </h2>
      <div className="form-container">
      <h6>แก้ไขบัญชี Admin ID: {id}</h6>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="ชื่อ"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="นามสกุล"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="เบอร์โทร"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="อีเมล"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-row">
            <button type="submit" className="save-button">
              บันทึก
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/adminmanagement")}
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdminAccount;
