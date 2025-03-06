import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import providerDummyData from "../../../data/providersDummyData";
import "./providerDetail.css";
import man1 from "../../../imgs/man.jpg";
import tcar from "../../../imgs/towcar.jpg";

function ProviderDetail() {
  const navigate = useNavigate();
  const { providerId } = useParams(); // รับ providerId จาก URL
  const provider = providerDummyData.find((p) => p.id === parseInt(providerId)); // หา provider ตาม ID

  return (
    <div className="provider-detail-container">
      <div className="provider-detail-content">
        <div className="provider-detail-profile">
          <img src={man1} alt="Profile" />
          <h2>
            {provider?.name} {provider?.surname}
          </h2>
        </div>
        <div className="provider-detail-info">
          <p style={{ fontWeight: "bold" }}>ข้อมูลผู้ให้บริการ</p>
          <div className="provider-detail-info-content">
            <div className="provider-detail-info-name">
              <p>
                ชื่อ: <input type="text" disabled value={provider?.name} />
              </p>
              <p>
                นามสกุล:{" "}
                <input type="text" disabled value={provider?.surname} />
              </p>
            </div>
            <p>
              อีเมล: <input type="text" disabled value={provider?.email} />
            </p>
            <p>
              เบอร์โทรศัพท์:
              <input type="text" disabled value={provider?.phoneNumber} />
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>ข้อมูลรถ</p>
          </div>
          <div className="provider-detail-info-car">
            <div>
              <div>
                <img src={tcar} alt="" />
              </div>
            </div>
            <div className="provider-detail-info-car-container">
              <p>
                ประเภท:
                <input type="text" disabled value={provider?.slideCarType} />
              </p>
              <p>
                รายละเอียด:
                <input type="text" disabled value={provider?.slideCarDetails} />
              </p>
            </div>
          </div>
          <button onClick={() => navigate(-1)}>กลับ</button>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail;
