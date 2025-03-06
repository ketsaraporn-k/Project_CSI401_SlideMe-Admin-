import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import providerDummyData from "../../app-data/providersDummyData"; // นำเข้าข้อมูล dummy
import Pagination from "react-bootstrap/Pagination";
import "./Provider.css";

function Provider() {
  const navigate = useNavigate();
  const location = useLocation();
  const [providers, setProviders] = useState(
    location.state?.providers || providerDummyData
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = providers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(providers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const getPageItems = () => {
    let pages = [];
    if (currentPage <= 2) {
      pages = [1, 2, 3];
    } else if (currentPage >= totalPages - 1) {
      pages = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }
    return pages;
  };

  const handleDelete = (id) => {
    const updatedProviders = providers.filter((provider) => provider.id !== id);
    setProviders(updatedProviders);
  };

  return (
    <div className="provider-container">
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ลำดับ</th>
              <th style={{ width: "20%" }}>ชื่อ-สกุล</th>
              <th style={{ width: "20%" }}>อีเมล</th>
              <th style={{ width: "15%" }}>เบอร์โทรศัพท์</th>
              <th style={{ width: "15%" }}>รายละเอียด</th>
              <th style={{ width: "10%" }}>แก้ไข</th>
              <th style={{ width: "10%" }}>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((provider, index) => (
              <tr key={provider.id}>
                <td style={{ textAlign: "center" }}>
                  {indexOfFirstItem + index + 1}
                </td>
                <td style={{ textAlign: "left" }}>
                  {`${provider.name} ${provider.surname}`}
                </td>
                <td style={{ textAlign: "left" }}>
                  {provider.email || "example@example.com"}
                </td>
                <td>{provider.phoneNumber}</td>
                <td>
                  <button
                    style={{ width: "50%" }}
                    className="details-button"
                    onClick={() => navigate(`/providerdetail/${provider.id}`)}
                  >
                    รายละเอียด
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/editprovider/${provider.id}`)}
                    className="edit-button"
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(provider.id)}
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination>
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
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

export default Provider;
