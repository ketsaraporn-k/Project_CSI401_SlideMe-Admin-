import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Review.css";
import ReviewData from "../../app-data/ReviewData";
import { useNavigate } from "react-router-dom";

function Review() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(ReviewData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = ReviewData.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="review-container">
      <h1 className="fs-3 font-bold mb-3">Review Management</h1>
      <table className="table table-hover table-bordered shadow-sm rounded table-striped">
        <thead className="table-dark">
          <tr>
            <th>ลำดับ</th>
            <th className="text-start">ชื่อ - นามสกุล</th>
            <th>รีวิวจากลูกค้า</th>
            <th>คะแนนรีวิว</th>
            <th className="text-center">ตรวจสอบ</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={item.id}>
              <td className="align-middle text-center">
                <span>{startIndex + index + 1}</span>
              </td>
              <td className="align-middle">{item.name}</td>
              <td className="align-middle text-sm w-50">{item.userReview}</td>
              <td
                className="align-middle text-center"
                dangerouslySetInnerHTML={{ __html: item.rating }}
              ></td>
              <td className="text-center align-middle">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => navigate("CheckDriver")}
                >
                  ตรวจสอบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          หน้าแรก
        </button>
        <button
          className="btn btn-secondary mx-2"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          ก่อนหน้า
        </button>
        <span className="page-info mx-3">
          {currentPage} / {totalPages}
        </span>
        <button
          className="btn btn-secondary mx-2"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          ถัดไป
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          หน้าสุดท้าย
        </button>
      </div>
    </div>
  );
}

export default Review;
