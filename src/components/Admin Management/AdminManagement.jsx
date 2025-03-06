import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminManagement.css";

const AdminManagement = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [adminList, setAdminList] = useState([
    { id: 1, name: "roren" },
    { id: 2, name: "mfanthom3" },
  ]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // เพิ่ม: ตรวจสอบว่าฟิลด์ทั้งหมดกรอกครบถ้วนและรหัสผ่านตรงกัน
  if (
    !formData.firstName || // ตรวจสอบว่าชื่อกรอกหรือยัง
    !formData.lastName || // ตรวจสอบว่านามสกุลกรอกหรือยัง
    !formData.phone || // ตรวจสอบว่าเบอร์โทรกรอกหรือยัง
    !formData.email || // ตรวจสอบว่าอีเมลกรอกหรือยัง
    !formData.password || // ตรวจสอบว่ารหัสผ่านกรอกหรือยัง
    formData.password !== formData.confirmPassword // ตรวจสอบว่ารหัสผ่านกับยืนยันรหัสผ่านตรงกันหรือไม่
  ) {
    Swal.fire({
      title: "เกิดข้อผิดพลาด!",
      text: "กรุณากรอกข้อมูลให้ครบถ้วนและตรวจสอบรหัสผ่าน",
      icon: "error",
    });
    return; // หยุดการทำงานถ้าข้อมูลไม่ครบหรือรหัสผ่านไม่ตรงกัน
  }

  // เพิ่ม: สร้าง object สำหรับ admin ใหม่ที่ต้องการเพิ่มในรายการ
  const newAdmin = {
    id: adminList.length + 1, // สร้าง ID ใหม่โดยเพิ่มจากจำนวน admin ในรายการปัจจุบัน
    name: `${formData.firstName} ${formData.lastName}`, // รวมชื่อและนามสกุลเป็นหนึ่งฟิลด์
  };

  // เพิ่ม: อัปเดต state adminList โดยเพิ่ม admin ใหม่
  setAdminList([...adminList, newAdmin]); // ใช้ spread operator เพื่อรวม admin ใหม่เข้ากับรายการเดิม

  // เพิ่ม: แสดงข้อความแจ้งเตือนว่าการบันทึกสำเร็จ
  Swal.fire({
    title: "บันทึกข้อมูลสำเร็จ!",
    text: "ข้อมูลถูกบันทึก",
    icon: "success",
  });

  // เพิ่ม: รีเซ็ตข้อมูลในฟอร์มให้ว่างหลังจากบันทึกสำเร็จ
  setFormData({
    firstName: "", // ล้างฟิลด์ชื่อ
    lastName: "", // ล้างฟิลด์นามสกุล
    phone: "", // ล้างฟิลด์เบอร์โทร
    email: "", // ล้างฟิลด์อีเมล
    password: "", // ล้างฟิลด์รหัสผ่าน
    confirmPassword: "", // ล้างฟิลด์ยืนยันรหัสผ่าน
  });

  // สำหรับการดีบัก ดูข้อมูลที่บันทึกใน console
  console.log("Form submitted:", formData);
  };

  // Function to handle edit button click
  const handleEdit = (id) => {
    // นำทางไปยังหน้า EditAdminAccount พร้อม ID
    navigate(`/edit-admin/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการลบบัญชีนี้ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        // ลบ admin ที่มี id ตรงกับรายการที่เลือก
        setAdminList(adminList.filter((admin) => admin.id !== id));
        Swal.fire({
          title: "ลบสำเร็จ!",
          text: "บัญชีถูกลบออกจากระบบ",
          icon: "success",
        });
      }
    });
  };

  //เพื่ออัปเดตรายชื่อ adminList
  const updateAdmin = (updatedAdmin) => {
    setAdminList((prevList) =>
      prevList.map((admin) =>
        admin.id === updatedAdmin.id ? updatedAdmin : admin
      )
    );
  };
  
  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  

  return (
    <div className="admin-management-container">
      <h2>Admin Management</h2>

      <div className="form-container">
        <h3>เพิ่มบัญชี Admin</h3>
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
          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="รหัสผ่าน"
              value={formData.password}
              onChange={handleInputChange}
            
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="ยืนยันรหัสผ่าน"
              value={formData.confirmPassword}
              onChange={handleInputChange}
          
            />
          </div>
          <div className="button-row">
            <button type="submit" className="save-button">
                บันทึก
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
                ยกเลิก
            </button>
          </div>
        </form>
      </div>

      <div className="admin-list-container">
        <h3>ข้อมูลบัญชี Admin</h3>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {adminList.map((admin, index) => (
              <tr key={admin.id}>
                <td>{index + 1}</td>
                <td>{admin.name}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(admin.id)}
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(admin.id)}
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default AdminManagement;