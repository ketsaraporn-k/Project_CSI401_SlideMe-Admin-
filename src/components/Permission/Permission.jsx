import React, { useState } from "react";
import Select from "react-select";
import "./Permission.css"

const Permission = () => {
  const roles = ["SuperAdmin", "Admin"];

  // ฟังก์ชันในรูปแบบ Label-Value
  const functions = [
    { value: "F1", label: "Admin Management " },
    { value: "F2", label: "Status Management" },
    { value: "F3", label: "Vehicle Type Management" },
    { value: "F4", label: "Distance Management" },
    { value: "F5", label: "Price Management" },
    { value: "F6", label: "Order Management" },
    { value: "F7", label: "Provider Approve Management" },
    { value: "F8", label: "Review Management" },
    { value: "F9", label: "User Management" },
    { value: "F10", label: "Provider Management" },
    { value: "F11", label: "Banner Management" },
    { value: "F12", label: "Tutorial Management" },
    { value: "F13", label: "About Us Management" },
  ];

  // State สำหรับจัดการสิทธิ์ในแต่ละ Role
  const [permissions, setPermissions] = useState({
    SuperAdmin: [],
    Admin: []
  });

  // อัปเดตค่าที่เลือก
  const handleSelectChange = (role, selectedOptions) => {
    const selectedFunctions = selectedOptions.map((option) => option.value); // เก็บเฉพาะค่า value
    setPermissions((prev) => ({ ...prev, [role]: selectedFunctions }));
  };

  // ฟังก์ชันนับจำนวนที่เลือก
  const getSelectedCount = (role) => {
    const count = permissions[role]?.length || 0;
    return count > 0
      ? `${count} function${count > 1 ? "s" : ""}` 
      : "No functions selected"; 
  };

  // เลือกทั้งหมด
  const handleSelectAll = (role) => {
    setPermissions((prev) => ({ ...prev, [role]: functions.map((fn) => fn.value) }));
  };

  // ยกเลิกทั้งหมด
  const handleClearAll = (role) => {
    setPermissions((prev) => ({ ...prev, [role]: [] }));
  }; 
  
  return (
    <div className="per-container">
      <h1>Permission</h1>

      <div className="permission-grid">
        <h2>จัดการสิทธิ์การเข้าถึง</h2>

        {roles.map((role) => (
          <div key={role} className="role-section">
            <h3 className="role-title">{role}</h3>
            <Select
              options={functions}
              value={functions.filter((fn) => permissions[role].includes(fn.value))} // แสดงค่าที่เลือก
              isMulti
              onChange={(selectedOptions) => handleSelectChange(role, selectedOptions || [])}
              placeholder={`Select functions for ${role}`} 
            />
            <div className="controls">
              <button onClick={() => handleSelectAll(role)} className="button select-all">
                เลือกทั้งหมด
              </button>
              <button onClick={() => handleClearAll(role)} className="button clear-all">
                ยกเลิก
              </button>
            </div>
            <p className="selected-count">{getSelectedCount(role)}</p>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Permission