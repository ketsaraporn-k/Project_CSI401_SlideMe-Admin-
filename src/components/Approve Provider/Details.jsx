import React, { useState } from "react";
import "./Details.css";
import { useParams, useNavigate } from "react-router-dom";
import dummyData from "../../data/dummyData";
import filespic from "../../imgs/file-icon.png";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  const handleApprove = () => {
    const updatedData = dummyData.filter((item) => item.id !== parseInt(id));
    dummyData.length = 0;
    dummyData.push(...updatedData);

    navigate("/approveprovider");
  };

  const handleReject = () => {
    if (rejectReason.trim() === "") {
      alert("กรุณาใส่เหตุผลก่อนทำการยืนยัน");
      return;
    }
    const updatedData = dummyData.filter((item) => item.id !== parseInt(id));
    dummyData.length = 0;
    dummyData.push(...updatedData);

    navigate("/approveprovider");
  };

  return (
    <div className="details-container">
      <h1>รายละเอียดร้านค้า</h1>
      <p>รหัสร้าน: {id}</p>
      <div className="file-container">
        {/* ไอคอนสำหรับดาวน์โหลดไฟล์ */}
        <div>
          <a href="/รถลาก6ล้อ.pdf" download="รถลาก6ล้อ.pdf">
            <img
              src={filespic}
              alt="ดาวน์โหลด"
              style={{ width: "150px", height: "180px" }}
            />
          </a>
          <p>คลิกที่ไอคอนเพื่อตรวจสอบรถที่ให้บริการ</p>
        </div>
        <div>
          <a href="/ใบขับขี่.pdf" download="ใบขับขี่.pdf">
            <img
              src={filespic}
              alt="ดาวน์โหลด"
              style={{ width: "150px", height: "180px" }}
            />
          </a>
          <p>คลิกที่ไอคอนเพื่อตรวจสอบใบขับขี่ผู้ขับ</p>
        </div>
        <div>
          <a href="/บัตรปชช.pdf" download="บัตรปชช.pdf">
            <img
              src={filespic}
              alt="ดาวน์โหลด"
              style={{ width: "150px", height: "180px" }}
            />
          </a>
          <p>คลิกที่ไอคอนเพื่อตรวจสอบบัตรประชาชนผู้ขับ</p>
        </div>
        <div>
          <a href="/เล่มทะเบียน.pdf" download="เล่มทะเบียน.pdf">
            <img
              src={filespic}
              alt="ดาวน์โหลด"
              style={{ width: "150px", height: "180px" }}
            />
          </a>
          <p>คลิกที่ไอคอนเพื่อตรวจสอบเล่มทะเบียนรถที่ให้บริการ</p>
        </div>
        <div>
          <a href="/พรบ.pdf" download="พรบ.pdf">
            <img
              src={filespic}
              alt="ดาวน์โหลด"
              style={{ width: "150px", height: "180px" }}
            />
          </a>
          <p>คลิกที่ไอคอนเพื่อตรวจสอบ พ.ร.บ.</p>
        </div>
      </div>
      <div className="button-container">
        <button
          className="btn btn-success"
          onClick={() => setShowApproveModal(true)}
        >
          อนุมัติ
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setShowRejectModal(true)}
        >
          ไม่อนุมัติ
        </button>
      </div>

      {/* Modal อนุมัติ */}
      {showApproveModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">ยืนยันการอนุมัติ</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowApproveModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>คุณต้องการอนุมัติข้อมูลนี้หรือไม่?</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleApprove();
                    setShowApproveModal(false);
                  }}
                >
                  ยืนยัน
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowApproveModal(false)}
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal ไม่อนุมัติ */}
      {showRejectModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">เหตุผลการไม่อนุมัติ</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowRejectModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  placeholder="กรุณาใส่เหตุผล..."
                  rows="4"
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleReject();
                    setShowRejectModal(false);
                  }}
                >
                  ยืนยัน
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowRejectModal(false)}
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
