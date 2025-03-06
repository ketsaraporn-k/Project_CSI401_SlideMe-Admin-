import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CheckDriver.css'
import CheckReviewData from "../../app-data/CheckReviewData";
import { useNavigate } from "react-router-dom";

function CheckDriver() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(CheckReviewData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = CheckReviewData.slice(startIndex, endIndex);

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
      <div className="flex items-center w-full justify-between">
        <h1 className="fs-3 font-bold">Check Driver's Review</h1>
        <i
          onClick={() => navigate("/review")}
          className="bi bi-backspace-fill fs-2 mb-2 text-red-400 cursor-pointer"
        ></i>
      </div>
      <table className="table table-hover table-bordered shadow-sm rounded">
        <thead className="table-dark">
          <tr>
            <th>ไอดี</th>
            <th>ชื่อบัญชีลูกค้า</th>
            <th>รีวิวจากลูกค้า</th>
            <th>คะแนนรีวิว</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={item.id}>
              <td className="align-middle text-center">
                <span>{item.id}</span>
              </td>
              <td className="align-middle text-center">{item.name}</td>
              <td className="align-middle text-sm w-50">{item.userReview}</td>
              <td className="align-middle text-center"
              dangerouslySetInnerHTML={{ __html: item.rating }}>
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

export default CheckDriver;
