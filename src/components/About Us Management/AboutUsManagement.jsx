import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate จาก React Router สำหรับการเปลี่ยนเส้นทาง

import "./AboutUsManagement.css";

const AboutUsManagement = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(false);
  const [aboutUsData, setAboutUsData] = useState([]);
  const navigate = useNavigate(); // ใช้ navigate สำหรับการเปลี่ยนหน้า

  // ฟังก์ชันอัปโหลดรูปภาพ
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file)); // แปลงไฟล์ภาพให้เป็น URL ชั่วคราว
  };

  // ฟังก์ชันบันทึกข้อมูลใหม่ลงใน state
  const handleSave = () => {
    const newEntry = {
      id: aboutUsData.length + 1, // สร้าง ID ใหม่ให้กับข้อมูล
      title,
      subtitle,
      description,
      image,
      status,
    };
    setAboutUsData([...aboutUsData, newEntry]); // เพิ่มข้อมูลใหม่ลงในรายการทั้งหมด
    clearForm(); // ล้างฟอร์มหลังจากบันทึกเสร็จ
    Swal.fire({
      title: "บันทึกข้อมูลสำเร็จ!",
      text: "ข้อมูลถูกบันทึก",
      icon: "success",
    });
  };

  // ฟังก์ชันสำหรับล้างข้อมูลในฟอร์ม
  const clearForm = () => {
    setTitle("");
    setSubtitle("");
    setDescription("");
    setImage(null);
    setStatus(false);
  };

  // ฟังก์ชันสำหรับลบข้อมูลโดยใช้ ID
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
        setAboutUsData(aboutUsData.filter((item) => item.id !== id)); // ลบข้อมูลที่ตรงกับ ID ออกจากรายการ
        Swal.fire({
          title: "ลบสำเร็จ!",
          text: "บัญชีถูกลบออกจากระบบ",
          icon: "success",
        });
      }
    });
  };

  // ฟังก์ชันสำหรับแก้ไขข้อมูล โดยใช้ navigate ไปยังหน้าแก้ไข พร้อมกับส่ง ID ไปด้วย
  const handleEdit = (id) => {
    navigate(`/about-edit/${id}`); // เปลี่ยนหน้าไปที่ URL /edit/ตามด้วย ID ที่ต้องการแก้ไข
  };

  return (
    <div className="about-us-management">
      <h2>About Us Management</h2>

      <div className="form-section">
        <h3>การจัดการเกี่ยวกับเรา</h3>
        <form>
          <div className="form-group">
            <label>หัวข้อ</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="หัวข้อ"
            />
          </div>
          <div className="form-group">
            <label>หัวข้อย่อย</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="หัวข้อย่อย"
            />
          </div>
          <div className="form-group">
            <label>รายละเอียด</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="รายละเอียด"
            />
          </div>
          <div className="form-group">
            <label>รูปภาพ</label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleImageUpload}
            />
            {image && (
              <img src={image} alt="Preview" className="image-preview" />
            )}
          </div>

          {/* filters */}
          <div className="todo-filters-container">
            <label>สถานะ</label>
            &nbsp;
            <div className="toggle-container">
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={status}
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <button type="button" onClick={handleSave} className="save-button">
            บันทึก
          </button>
          <button type="button" onClick={clearForm} className="cancel-button">
            ยกเลิก
          </button>
        </form>
      </div>

      <div className="data-section">
        <h3>ข้อมูล เกี่ยวกับเรา</h3>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>หัวข้อ</th>
              <th>รูปภาพ</th>
              <th>สถานะ</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {aboutUsData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  {item.image && (
                    <img
                      src={item.image}
                      alt="Thumbnail"
                      className="thumbnail"
                    />
                  )}
                </td>
                <td>
                  <div className="form-group">
                    <div className="toggle-container">
                      <label className="toggle">
                        <input
                          type="checkbox"
                          checked={status}
                          onChange={(e) => setStatus(e.target.checked)}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </td>
                <td>
                  <button className="btn btn-secondary" onClick={() => handleEdit(item.id)}>แก้ไข</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete-button"
                    style={{ backgroundColor: "black", color: "white" }}
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

export default AboutUsManagement;
