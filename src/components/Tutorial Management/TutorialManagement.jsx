import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TutorialManagement.css";

function TutorialManagement({ tutoriales, setTutoriales }) {
  const navigate = useNavigate(); //ใช้ navigate เพื่อนำทางไปยังหน้าการแก้ไข
  const [tutorialName, setTutorialName] = useState("");
  const [details, setDetails] = useState("");
  const [subs, setSubs] = useState("");
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // ฟังก์ชันสําหรับบันทึกการแก้ไข
  const handleEdit = (id) => {
    navigate(`/edit-tutorial/${id}`);
  
  };

  // ฟังก์ชันสําหรับบันทึก
  const handleSave = () => {
    if (!tutorialName || (!file && !editingId)) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนและอัปโหลดรูปภาพ");
      return;
    }

    // แก้ไขข้อมูล
    if (editingId) {
      setTutoriales(
        tutoriales.map((type) =>
          type.id === editingId
            ? {
                ...type,
                name: tutorialName,
                details: details,
                subs: subs,
                image: file ? URL.createObjectURL(file) : type.image,
                status: status,
              }
            : type
        )
      );
      setEditingId(null);
    } else {
      const newTutorial = {
        id: tutoriales.length + 1,
        name: tutorialName,
        details: details,
        subs: subs,
        image: URL.createObjectURL(file),
        status: status,
      };
      setTutoriales([...tutoriales, newTutorial]);
    }

    setTutorialName("");
    setDetails("");
    setSubs("");
    setStatus(false);
    setFile(null);
  };

  // ฟังก์ชันสําหรับลบ
  const handleDelete = (id) => {
    setTutoriales(tutoriales.filter((type) => type.id !== id));
  };

  return (
    <div className="tu-container">
      <h1>Tutorial Management</h1>

      <div className="form-container">
        <h2>{editingId ? "แก้ไขคู่มือ" : "เพิ่มคู่มือ"}</h2>
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
            setTutorialName("");
            setDetails("");
            setSubs("");
            setStatus(false);
            setFile(null);
            setEditingId(null);
          }}
        >
          ยกเลิก
        </button>
      </div>

      <div className="table-container">
        <h2>ข้อมูลคู่มือ</h2>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>หัวข้อ</th>
              <th>รูปภาพ</th>
              <th>สถานะ</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {tutoriales.map((type, index) => (
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
                        const updatedTutorial = tutoriales.map((t) =>
                          t.id === type.id ? { ...t, status: !type.status } : t
                        );
                        setTutoriales(updatedTutorial);
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

export default TutorialManagement;
