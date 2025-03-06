import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vehiclemanage.css";

function VehicleManagement({ vehicleTypes, setVehicleTypes }) {
  const navigate = useNavigate(); //ใช้ navigate เพื่อนำทางไปยังหน้าการแก้ไข
  const [vehicleName, setVehicleName] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // ฟังก์ชันแก้ไขข้อมูล
  const handleEdit = (id) => {
    navigate(`/edit-vehicle/${id}`);
  
  };

  // ฟังก์ชันบันทึกข้อมูล
  const handleSave = () => {
    if (!vehicleName || (!file && !editingId)) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนและอัปโหลดรูปภาพ");
      return;
    }

    // แก้ไขข้อมูล
    if (editingId) {
      setVehicleTypes(
        vehicleTypes.map((type) =>
          type.id === editingId
            ? {
                ...type,
                name: vehicleName,
                details: details,
                image: file ? URL.createObjectURL(file) : type.image,
                status: status,
              }
            : type
        )
      );
      setEditingId(null); // รีเซ็ต ID หลังการบันทึก
    } else {
      const newVehicle = {
        id: vehicleTypes.length + 1,
        name: vehicleName,
        details: details,
        image: URL.createObjectURL(file),
        status: status,
      };
      setVehicleTypes([...vehicleTypes, newVehicle]);
    }

    setVehicleName("");
    setDetails("");
    setStatus(false);
    setFile(null);
  };

  // ฟังก์ชันลบข้อมูล
  const handleDelete = (id) => {
    setVehicleTypes(vehicleTypes.filter((type) => type.id !== id));
  };

  return (
    <div className="vehi-container">
      <h1>Vehicle Type Management</h1>

      <div className="form-container">
        <h2>{editingId ? "แก้ไขประเภทรถ" : "เพิ่มประเภทรถ"}</h2>
        <label>ชื่อประเภทรถ</label>
        <input
          type="text"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
          placeholder="ชื่อ"
        />
        <label>รายละเอียด</label>
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="รายละเอียด"
        />
        <label>รูปภาพ</label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label>สถานะ</label>
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
        <br />
        <br />
        <button onClick={handleSave} className="save-button">
          {editingId ? "บันทึกการแก้ไข" : "บันทึก"}
        </button>
        <button
          className="cancel-button"
          onClick={() => {
            setVehicleName("");
            setDetails("");
            setStatus(false);
            setFile(null);
            setEditingId(null);
          }}
        >
          ยกเลิก
        </button>
      </div>

      <div className="table-container">
        <h2>ข้อมูลประเภทรถสไลด์</h2>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ</th>
              <th>รูปภาพ</th>
              <th>สถานะ</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {vehicleTypes.map((type, index) => (
              <tr key={type.id}>
                <td>{index + 1}</td>
                <td>{type.name}</td>
                <td>
                  <img
                    src={type.image}
                    alt={type.name}
                    className="img-thumbnail"
                  />
                </td>
                <td>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={type.status}
                      onChange={() => {
                        const updatedTypes = vehicleTypes.map((t) =>
                          t.id === type.id ? { ...t, status: !type.status } : t
                        );
                        setVehicleTypes(updatedTypes);
                      }}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(type.id)}
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(type.id)}
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
}

export default VehicleManagement;
