import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PriceManagement.css';

function PriceManagement() {
  const navigate = useNavigate();

  // State สำหรับจัดการข้อมูลในตาราง
  const [prices, setPrices] = useState([
    { id: 1, name: 'VAT ', price: '200' },
    { id: 2, name: 'Service charge', price: '300' },
  ]);

  // Function to handle edit button click
  const handleEditClick = (id) => {
    navigate(`/edit-price/${id}`);
  };

  // Function to handle adding a new row
  const handleAddNew = () => {
    const newId = prices.length > 0 ? prices[prices.length - 1].id + 1 : 1;
    setPrices([...prices, { id: newId, name: '', price: '' }]);
  };

  return (
    <div className="price-management">
      <h1>Price Management</h1>
      <div className="price-table">
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อค่าบริการ</th>
              <th>ราคา</th>
              <th>แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    placeholder="ชื่อ"
                    onChange={(e) =>
                      setPrices(
                        prices.map((price) =>
                          price.id === item.id
                            ? { ...price, name: e.target.value }
                            : price
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.price}
                    placeholder="ราคา"
                    onChange={(e) =>
                      setPrices(
                        prices.map((price) =>
                          price.id === item.id
                            ? { ...price, price: e.target.value }
                            : price
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <button onClick={() => handleEditClick(item.id)}>แก้ไข</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-button" onClick={handleAddNew}>
          เพิ่มข้อมูลใหม่
        </button>
      </div>
    </div>
  );
}

export default PriceManagement;
