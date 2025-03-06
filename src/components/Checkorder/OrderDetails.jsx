import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import OrderData from "../../app-data/OrderData";
/* import mapPic from "../../imgs/map.png"; */
import "./OrderDetails.css";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


function OrderDetails() {
  const { orderNumber } = useParams(); // ดึง orderNumber จาก URL
  const orderDetails = OrderData.find(
    (item) => item.order_number === parseInt(orderNumber)
  );
  const navigate = useNavigate(); // สร้าง instance ของ useNavigate

  if (!orderDetails) {
    return <p>Order not found!</p>;
  }

  const handleBackClick = () => {
    navigate("/checkOrder"); // ใช้ navigate ไปที่หน้า /checkOrder
  };


   // โหลด Google Maps API
   const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY, // ใส่ API Key จาก .env
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

   // ตำแหน่งตัวอย่าง (กรุงเทพฯ)
   const defaultCenter = { lat: 13.7563, lng: 100.5018 };

  return (
    <div className="order-details-container">
      <h4>Order Details for Order Number: {orderDetails.order_number}</h4>
      <div>
        <div>
          <button onClick={handleBackClick}>
            <i
              className="bi bi-arrow-left-short"
              style={{ fontSize: "2rem" }}
            ></i>
          </button>

          {/* Google Map */}
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "600px" }}
          center={defaultCenter}
          zoom={12}
        >
          {/* Marker ที่ตำแหน่ง defaultCenter */}
          <Marker position={defaultCenter} />
        </GoogleMap>
      </div>

          {/* <img src={mapPic} alt="" className="order-details-map" /> */}


        </div>
        <div className="order-details-infos">
          <div className="order-details-info-box1">
            <div>
              <label htmlFor="" className="order-details-label">
                Date
              </label>
              <input type="text" disabled value={orderDetails.date} />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Order Number
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.order_number}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Order Status
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.status}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Payment Method
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.payment_method}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Vehicle Type
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.towcar_type}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Price Service
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.price_service}
                className="order-details-input"
              />
            </div>
          </div>
          <div className="order-details-info-box2">
            <div>
              <label htmlFor="" className="order-details-label">
                Name-Surname
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.name + " " + orderDetails.surname}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Number
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.phone_number}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Distance
              </label>
              <input
                type="text"
                disabled
                value="Sripatum University , อู่ซ่อมบีเอ็ม BM-Pro Auto Service "
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Provider
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.provider}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Provider Number
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.provider_phone_number}
                className="order-details-input"
              />
            </div>
            <div>
              <label htmlFor="" className="order-details-label">
                Review
              </label>
              <input
                type="text"
                disabled
                value={orderDetails.review}
                className="order-details-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
