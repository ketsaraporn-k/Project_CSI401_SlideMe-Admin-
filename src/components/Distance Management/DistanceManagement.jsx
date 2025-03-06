import React, { useState, useEffect } from "react";
import "./DistanceManagement.css"


function DistanceManagement() {

     // ใช้ useState เพื่อเก็บสถานะว่า input อยู่ในโหมดแก้ไขหรือไม่
  const [isEditing, setIsEditing] = useState(false);

  // กำหนดค่าเริ่มต้นของ radius จาก localStorage หากมีค่าเก็บอยู่ หรือกำหนดเป็น 10 ถ้าไม่มีค่า
  const [radius, setRadius] = useState(() => {
    const savedRadius = localStorage.getItem("radius");
    return savedRadius ? parseInt(savedRadius) : 10;
  });

  // useEffect จะทำงานทุกครั้งเมื่อค่า radius เปลี่ยนแปลง
  useEffect(() => {
    // บันทึกค่า radius ปัจจุบันลงใน localStorage
    localStorage.setItem("radius", radius);
  }, [radius]);

  // ฟังก์ชันเพื่อเปิดโหมดแก้ไข
  const handleEdit = () => {
    setIsEditing(true); // เปลี่ยนสถานะให้สามารถแก้ไข input ได้
  };

  // ฟังก์ชันเพื่อปิดโหมดแก้ไขและบันทึกข้อมูล
  const handleSave = () => {
    setIsEditing(false); // ปิดโหมดแก้ไข
    // useEffect จะทำงานอัตโนมัติเพื่อบันทึกค่า radius ลงใน localStorage
  };

  // ฟังก์ชันสำหรับอัปเดตค่าของ radius เมื่อมีการพิมพ์ใน input
  const handleInputChange = (e) => {
    setRadius(e.target.value); // อัปเดตค่าที่พิมพ์ใน input ไปยังตัวแปร radius
  };

    return ( 
        <div className="container-approve">
        <div>
          <p className="text-approve">จัดการระยะทาง</p>
        </div>
        <div className="box-approve">
          <div >
            <p className="context-approve">รัศมีในการค้นหา</p>
          </div>
          <div >
            <div className="input-container">
              <input
                type="number"
                className="input-approve"
                value={radius} // แสดงค่าปัจจุบันของ radius
                onChange={handleInputChange} // เรียกฟังก์ชัน handleInputChange เมื่อมีการพิมพ์
                disabled={!isEditing} // ปิดการแก้ไขถ้าไม่ได้อยู่ในโหมดแก้ไข
              />
              <span className="unit">KG.</span>
            </div>
          </div>
          <div className="button-container">
            {isEditing ? (
              <button onClick={handleSave} className="save-button">
                ยืนยัน
              </button>
            ) : (
              <button onClick={handleEdit} className="edit-button">
                แก้ไข
              </button>
            )}
          </div>
        </div>
      </div>
     );
}

export default DistanceManagement;