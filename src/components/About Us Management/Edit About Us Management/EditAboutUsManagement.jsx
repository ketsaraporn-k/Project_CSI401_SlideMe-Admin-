import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditAboutUsManagement.css";

const EditAboutUsManagement = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate(); // สำหรับการเปลี่ยนหน้า

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSave = () => {
    // ฟังก์ชันบันทึกข้อมูล
    console.log({
      title,
      subtitle,
      description,
      image,
      status,
    });
    clearForm();
  };

  

  const clearForm = () => {
    setTitle("");
    setSubtitle("");
    setDescription("");
    setImage(null);
    setStatus(false);
  };

  const handleSaveClick = (e) => {
    e.preventDefault(); // ป้องกันการส่งฟอร์มทันที
    Swal.fire({
      title: "ยืนยันที่จะบันทึกข้อมูล?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "เสร็จสิ้น!",
          text: "",
          icon: "success",
        }).then(() => {
          navigate("/AboutUsManagement"); // กลับไปที่หน้า AboutUsManagement หลังจากกด OK
        });
      }
    });
  };

  const handleCancel = () => {
    // ใช้ navigate เพื่อกลับไปหน้า AboutUsManagement
    navigate("/AboutUsManagement");
  };

  return (
    <div className="edit-about-us-management">
      <h2>Edit About Us Management</h2>

      <div className="form-section">
        <h3>แก้ไข เกี่ยวกับเรา</h3>
        <form onSubmit={handleSaveClick}>
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
              class="form-control"
              type="file"
              id="formFile"
              onChange={handleImageUpload}
            />
            {image && (
              <img src={image} alt="Preview" className="image-preview" />
            )}
          </div>
          <div className="form-check form-switch">
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

          <div className="button-group">
            <button type="submit" className="save-button">
              บันทึก
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-button"
              style={{ backgroundColor: "black", color: "white" }}
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAboutUsManagement;
