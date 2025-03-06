import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './edittutorial.css'; 

function EditTutorial({ tutoriales, onSave }) {
  const { id } = useParams(); // ดึง id จาก URL
  const navigate = useNavigate();
  
  const [tutorialName, setTutorialName] = useState('');
  const [details, setDetails] = useState('');
  const [subs, setSubs] = useState('');
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  // ดึงข้อมูลคู่มือที่ต้องการแก้ไข
  useEffect(() => {
    const tutorial = tutoriales.find(v => v.id === parseInt(id));
    if (tutorial) {
      setTutorialName(tutorial.name);
      setDetails(tutorial.details);
      setSubs(tutorial.subs);
      setStatus(tutorial.status);
      setImageUrl(tutorial.image);
    }
  }, [id, tutoriales]);

  // ฟังก์ชันสําหรับบันทึกการแก้ไข
  const handleSave = () => {
    const editedTutorial = {
      id: parseInt(id),
      name: tutorialName,
      details: details,
      subs: subs,
      status: status,
      image: file ? URL.createObjectURL(file) : imageUrl,
    };

    onSave(editedTutorial);
    navigate('/tutorialmanagement'); // กลับไปหน้าหลักหลังจากบันทึก

  };

  // ฟังก์ชันสําหรับอัปโหลดรูปภาพ
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFile(newFile);
      setImageUrl(URL.createObjectURL(newFile)); // Update the image preview
    }
  };

  return (
    <div className="edit2-container">
      <h1>Edit Tutorial Management</h1>
      <div className="edit-form-container">
        <h2>แก้ไขข้อมูลคู่มือ (ID: {id})</h2>
        <label>หัวข้อ</label>
        <input
          type="text"
          value={tutorialName}
          onChange={(e) => setTutorialName(e.target.value)}
          placeholder="หัวข้อ"
        />
        <label>หัวข้อย่อย</label>
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="หัวข้อย่อย"
        />
        <label>รายละเอียด</label>
        <input
          type="text"
          value={subs}
          onChange={(e) => setSubs(e.target.value)}
          placeholder="รายละเอียด"
        />
        <label>รูปภาพ</label>
        <input 
           class="form-control"
           type="file"
           id="formFile" 
          onChange={handleFileChange} 
        />
        {imageUrl && <img src={imageUrl} alt="Tutorial-Image" className="img-preview" />}
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
          setTutorialName('');
          setDetails('');
          setSubs('');
          setStatus(false);
          setFile(null);
        }}>ยกเลิก</button>
      </div>
    </div>
  );
}

export default EditTutorial;
