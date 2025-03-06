import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './editvehicle.css'; 

function EditVehicle({ vehicleTypes, onSave }) {
  const { id } = useParams(); // ดึง id จาก URL
  const navigate = useNavigate();
  

  const [vehicleName, setVehicleName] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  // ดึงข้อมูลประเภทรถที่ต้องการแก้ไข
  useEffect(() => {
    const vehicle = vehicleTypes.find(v => v.id === parseInt(id));
    if (vehicle) {
      setVehicleName(vehicle.name);
      setDetails(vehicle.details);
      setStatus(vehicle.status);
      setImageUrl(vehicle.image);
    }
  }, [id, vehicleTypes]);

  // ฟังก์ชันบันทึกข้อมูล
  const handleSave = () => {
    const editedVehicle = {
      id: parseInt(id),
      name: vehicleName,
      details: details,
      status: status,
      image: file ? URL.createObjectURL(file) : imageUrl,
    };

    onSave(editedVehicle);
    navigate('/vehiclemanage'); // กลับไปหน้าหลักหลังจากบันทึก
  };

  // ฟังก์ชันแก้ไขรูปภาพ
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFile(newFile);
      setImageUrl(URL.createObjectURL(newFile)); // Update the image preview
    }
  };

  return (
    <div className="edit-container">
      <h1>Edit Vehicle Type Management</h1>
      <div className="edit-form-container">
        <h2>แก้ไขข้อมูลประเภทรถ (ID: {id})</h2>
        <label>ชื่อประเภทรถ</label>
        <input
          type="text"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
          placeholder="ชื่อประเภทรถ"
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
           class="form-control"
           type="file"
           id="formFile"
          onChange={handleFileChange} 
        />
        {imageUrl && <img src={imageUrl} alt="Vehicle" className="img-preview" />}
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
        <button onClick={handleSave} className="save-button">บันทึก</button>
        <button className="cancel-button" onClick={() => {
          setVehicleName('');
          setDetails('');
          setStatus(false);
          setFile(null);
          setEditingId(null);
        }}>ยกเลิก</button>
      </div>
    </div>
  );
}

export default EditVehicle;
