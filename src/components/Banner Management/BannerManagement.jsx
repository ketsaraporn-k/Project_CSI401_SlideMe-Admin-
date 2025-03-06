import React, { useState } from "react";
import "./BannerManagement.css";

function BannerManagement() {
  /* const [showPopup, setShowPopup] = useState(false); */
  const [isActive, setIsActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  /* const [isUploading, setIsUploading] = useState(false); */
  const [selectedDate, setSelectedDate] = useState("");
  const [formFields, setFormFields] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  // ฟังก์ชันอัปเดตค่าในฟอร์ม
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };


  // ฟังก์ชันจัดการยกเลิกและล้างค่าฟอร์ม
  const handleCancel = () => {
    setSelectedFile(null); // ล้างไฟล์ที่เลือก
    setPreview(""); // ลบภาพตัวอย่าง
    setSelectedDate(""); // รีเซ็ตวันที่
    setIsActive(false); // ตั้งสถานะเป็นปิด
    setFormFields({ title: "", subtitle: "", description: "" }); // รีเซ็ตฟอร์ม
    alert("ฟอร์มถูกล้างข้อมูลเรียบร้อย!");
  };

/*   const handleUploadPhoto = async () => {
    if (!selectedFile) {
        alert("กรุณาเลือกไฟล์รูปภาพ!");
        return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // เพิ่มไฟล์ใน FormData

    try {
        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            alert("เกิดข้อผิดพลาดในการอัปโหลด");
            return; // **เพิ่มการตรวจสอบสถานะของ response ก่อนที่จะทำการ parse ข้อมูล**
        }

        const data = await response.json();
        alert("อัปโหลดรูปภาพสำเร็จ!");
        console.log("Uploaded file URL:", data.filePath); // URL ของรูปภาพที่อัปโหลด
    } catch (error) {
        console.error("Error:", error);
        alert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์");
    }
}; */


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("กรุณาเลือกไฟล์รูปภาพเท่านั้น!");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("ขนาดไฟล์ต้องไม่เกิน 10MB!");
        return;
      }
      setSelectedFile(file);// เก็บไฟล์ลงใน state
      setPreview(URL.createObjectURL(file));// แสดงภาพตัวอย่าง
    }
  };

  const handleSaveClick = () => {
    alert("บันทึกข้อมูลสำเร็จ!");
  };

  const toggleStatus = () => {
    setIsActive(!isActive);// เปลี่ยนสถานะจากเปิด/ปิด
  };

  return (
    <div className="banner-container">
      <h2>Banner Management</h2>
      <div
        className="banner-card"
        style={{
          backgroundImage: preview ? `url(${preview})` : "none",
          backgroundColor: !preview ? "green" : "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner-content">
          <h3>September 12-22</h3>
          <h1>Enjoy free Banner delivery in this summer</h1>
          <p>Designer Dresses - Pick from trendy Designer Dress.</p>
          <button className="btn-get-started">Get Started</button>
        </div>

        <div className="upload-photo">
          <label className="btn bg-light">
            เลือกรูปภาพ
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
          {preview && (
            <div className="preview-container">
              <img src={preview} alt="Preview" className="preview-image" />
              <button
                className="btn btn-danger"
                onClick={() => {
                  setSelectedFile(null);
                  setPreview("");
                }}
              >
                ลบรูปภาพ
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>หัวข้อ</label>
          <input
            type="text"
            name="title"
            value={formFields.title}
            onChange={handleFieldChange}
            placeholder="Enter"
          />
        </div>
        <div className="form-group">
          <label>หัวข้อย่อย</label>
          <input
            type="text"
            name="subtitle"
            value={formFields.subtitle}
            onChange={handleFieldChange}
            placeholder="Enter"
          />
        </div>
        <div className="form-group">
          <label>รายละเอียด</label>
          <textarea
            name="description"
            value={formFields.description}
            onChange={handleFieldChange}
            placeholder="Enter"
          ></textarea>
        </div>
        <div className="form-group">
          <label>วันที่</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}// ใช้ state เพื่อเก็บวันที่ที่เลือก
          />
        </div>
        <div className="form-group">
          <label>สถานะ</label>
          <div className="toggle-container">
            <label className="toggle">
              <input
                type="checkbox"
                checked={isActive}
                onChange={toggleStatus}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="form-actions">
          <button className="save-button" onClick={handleSaveClick}>
            บันทึก
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerManagement;
