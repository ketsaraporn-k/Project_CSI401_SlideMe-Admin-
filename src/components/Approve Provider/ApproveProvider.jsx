import "./ApproveProvider.css";
import React, { useState } from "react";
import dummyData from "../../data/dummyData";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function ApproveProvider() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleCheck = (id) => {
    navigate(`/details/${id}`);
  };

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  // Determine the page range to display
  const getPageItems = () => {
    let pages = [];

    // For the start (page 1), show "1 2 3"
    if (currentPage <= 2) {
      pages = [1, 2, 3];
    }
    // For the end, show the last three pages, such as "8 9 10"
    else if (currentPage >= totalPages - 1) {
      pages = [totalPages - 2, totalPages - 1, totalPages];
    }
    // For the middle pages, show the current page and its neighbors
    else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }

    return pages;
  };

  return (
    <div className="distance-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>ลำดับ</th>
            <th>ชื่อร้าน</th>
            <th>ชื่อ-นามสกุล</th>
            <th style={{ width: "15%" }}>ที่อยู่</th>
            <th>Facebook</th>
            <th>Line</th>
            <th>Email</th>
            <th>ตรวจสอบ</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.id}>
              <td style={{ textAlign: "center" }}>{indexOfFirstItem + index + 1}</td>
              <td style={{ textAlign: "left" }}>{item.shopName}</td>
              <td style={{ textAlign: "left" }}>{item.fullName}</td>
              <td style={{ textAlign: "left" }}>{item.address}</td>
              <td style={{ textAlign: "left" }}>
                <a
                  href={`https://facebook.com/${item.facebookName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook-link"
                >
                  {item.facebookName}
                </a>
              </td>
              <td style={{ textAlign: "left" }}>{item.line}</td>
              <td style={{ textAlign: "left" }}>{item.email}</td>
              <td>
                <button onClick={() => handleCheck(item.id)}>ตรวจสอบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination>
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {/* Show pages based on the current page */}
        {getPageItems().map((page) => (
          <Pagination.Item
            key={page}
            onClick={() => handlePageChange(page)}
            active={page === currentPage}
            style={{width: "40px",backgroundColor:"#03D069",textAlign:"center",padding:"0px",margin:"0px"}}
          >
            {page}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}

export default ApproveProvider;
