import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPrice.css'

function EditPrice() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
     
    // ฟังก์ชันแสดงป๊อปอัป
    const handleSaveClick = (e) => { // เพิ่ม: ป้องกันการส่งฟอร์มเมื่อคลิกบันทึก
      e.preventDefault(); // เพิ่ม: ไม่ให้ฟอร์มถูกส่งทันที
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
          }).then(()=>navigate('/PriceManagement'))
        }
      });
    };
    //PriceManagement
  
    // ฟังก์ชันยืนยันการบันทึก
    const handleConfirmSave = () => {
      setShowPopup(false);
      console.log('Form submitted:', formData); // หรือเรียก API
      alert('บันทึกข้อมูลสำเร็จ!'); // สามารถเปลี่ยนเป็น API Call ได้

      navigate('/PriceManagement');
     
    };
  
    // ฟังก์ชันยกเลิกการบันทึก
    const handleCancelSave = () => {
      setShowPopup(false);
    };
  
    // Sample state for form inPriceManagementputs
    const [formData, setFormData] = useState({
      serviceOrder: id,
      serviceName: 'rorem', // Replace with actual data fetch if necessary
      servicePrice: '1500', // Replace with actual data fetch if necessary
    });
  
    // Handle input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission (ก่อนหน้านี้ไม่ได้ใช้ ฟังก์ชันนี้ตรงๆ เลย)
    const handleSubmit = (e) => { // เพิ่ม: ใช้กับการส่งฟอร์ม
      e.preventDefault();
      // Logic to save data goes here (e.g., API call)
      console.log('Form submitted:', formData);
      
    };
  
    // Handle cancel button
    const handleCancel = () => {
      navigate('/PriceManagement'); // กลับไปหน้า PriceManagement
    };
      
    
  
    return (
      <div className="edit-price-container">
        <h1>Price Edit</h1>
        <div className="edit-price-form">
          <form onSubmit={handleSaveClick}> {/* เพิ่ม: ใช้ handleSaveClick สำหรับการเปิดป๊อปอัป */}
            <div className="form-group">
              <label>ลำดับ</label>
              <input
                type="text"
                name="serviceOrder"
                value={formData.serviceOrder}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>ชื่อค่าบริการ</label>
              <input
                type="text"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>ราคาบริการ</label>
              <input
                type="text"
                name="servicePrice"
                value={formData.servicePrice}
                onChange={handleChange}
              />
            </div>
            <div className="form-buttons">
              {/* เพิ่ม type="submit" ในปุ่มบันทึก */}
              <button type="submit" className="btn-save"> {/* เป็น submit */}
                บันทึก
              </button>
              {/* เพิ่ม type="button" ในปุ่มยกเลิก */}
              <button type="button" className="btn-cancel" onClick={handleCancel}> {/* เพิ่ม: ให้ยกเลิกฟอร์ม */}
                ยกเลิก
              </button>
            </div>
          </form>
        </div>
  
        {/* Popup Confirmation */}
        {showPopup && ( // เพิ่ม: การแสดงป๊อปอัปเมื่อคลิกบันทึก
          <div className="popupEP-container">
            <div className="popupEP">
              <h3>ยืนยันการบันทึก</h3>
              <p>คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?</p>
              <div className="popupEP-actions">
                <button className="btn-confirm" onClick={handleConfirmSave}>
                  ยืนยัน
                </button>
                <button className="btn-cancel" onClick={handleCancelSave}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default EditPrice;
