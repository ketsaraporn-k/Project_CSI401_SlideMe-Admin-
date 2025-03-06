import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountStatus.css'; 

function AccountStatus({ statuses, setStatuses }) { 
  const navigate = useNavigate(); // สําหรับการเปลี่ยนหน้า
  const [accountName, setAccountName] = useState('');
  const [status, setStatus] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // ฟังก์ชันสําหรับการแก้ไข
  const handleEdit = (id) => {
    navigate(`/edit-status/${id}`);
  };

  // ฟังก์ชันสําหรับการบันทึก
  const handleSave = () => {
    if (!accountName || (!status && !editingId)) {
      Swal.fire({
        title: "ล้มเหลว",
        text: "กรุณาตรวจสอบข้อมูลอีกครั้ง",
        icon: "warning"
      });
      return;
    }

    // แก้ไขข้อมูล
    if (editingId) {
      setStatuses(statuses.map(type => 
        type.id === editingId
          ? {
              ...type,
              name: accountName,
              status: status,
            }
          : type
      ));
      setEditingId(null);
      
    } else {
      const newStatus = {
        id: statuses.length + 1,
        name: accountName,
        status: status,
      };
      setStatuses([...statuses, newStatus]);
    }

    setAccountName('');
    setStatus(false);
    navigate('/status');

  };

  // ฟังก์ชันสําหรับการลบ
  const handleDelete = (id) => {
    setStatuses(statuses.filter((type) => type.id !== id));
  };

  return (
    <div className="status-container">
      <h1>Account Status Management</h1>

      <div className="form-container">
        <h2>{editingId ? 'แก้ไขสถานะบัญชี' : 'เพิ่มสถานะบัญชี'}</h2>
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
        <button onClick={handleSave} className="save-button">
          {editingId ? 'บันทึกการแก้ไข' : 'บันทึก'}
        </button>
        <button className="cancel-button" onClick={() => {
          setAccountName('');
          setStatus(false);
          setEditingId(null);
        }}>ยกเลิก</button>
      </div>

      <div className="table-container">
        <h2>ข้อมูลสถานะบัญชี</h2>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ</th>
              <th>สถานะ</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {statuses.map((type, index) => (
              <tr key={type.id}>
                <td>{index + 1}</td>
                <td>{type.name}</td>
                <td>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={type.status}
                      onChange={() => {
                        const updatedStatus = statuses.map((t) =>
                          t.id === type.id ? { ...t, status: !type.status } : t
                        );
                        setStatuses(updatedStatus);
                      }}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(type.id)}>แก้ไข</button>
                </td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(type.id)}>ลบ</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountStatus;
