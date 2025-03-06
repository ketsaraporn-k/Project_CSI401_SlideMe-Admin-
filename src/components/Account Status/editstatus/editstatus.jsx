import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './editstatus.css'; 

function EditStatus({ statuses, onSave }) {
  const { id } = useParams(); // ดึง id จาก URL
  const navigate = useNavigate();
  
  const [accountName, setAccountName] = useState('');
  const [status, setStatus] = useState(false);

  // ฟังก์ชันสําหรับการโหลดข้อมูล
  useEffect(() => {
    const status = statuses.find(v => v.id === parseInt(id));
    if (status) {
      setAccountName(status.name);
      setStatus(status.status);
    }
  }, [id, statuses]);

  // ฟังก์ชันสําหรับการบันทึก
  const handleSave = () => {
    const editedStatus = {
      id: parseInt(id),
      name: accountName,
      status: status,
    };

    onSave(editedStatus);
    navigate('/status'); // กลับไปหน้าหลักหลังจากบันทึก
  };

  return (
    <div className="edit-container">
      <h1>Edit Account Status Management</h1>
      <div className="edit-form-container">
        <h2>แก้ไขข้อมูล Status (ID: {id})</h2>
        <label>ชื่อบัญชี</label>
        <input
          type="text"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          placeholder="ชื่อ"
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
        <button onClick={handleSave} className="save-button">บันทึก</button>
        <button className="cancel-button" onClick={() => {
          setAccountName('');
          setStatus(false);
          setEditingId(null);
        }}>ยกเลิก</button>
      </div>
    </div>
  );
}

export default EditStatus;
