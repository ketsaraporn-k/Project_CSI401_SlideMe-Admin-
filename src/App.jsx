import { useEffect, useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Header from "./Layout/Header/Header";
import Review from "./components/Review Management/Review";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminManagement from "./components/Admin Management/AdminManagement";
import Permission from "./components/Permission/Permission";
import AccountStatus from "./components/Account Status/AccountStatus";
import AdminAccout from "./components/Admin Account Management/AdminAccout";
import Login from "./components/Login/Login";
import Forgot from "./components/Login/Forgotpassword/Forgot";
import CheckDriver from "./components/Review2/CheckDriver";
import Checkorder from "./components/Checkorder/Checkorder";
import OrderDetails from "./components/Checkorder/OrderDetails";
import Layout from "./Layout/layout/Layout";

import Provider from "./components/ProviderManagement/Provider";


import BannerManagement from "./components/Banner Management/BannerManagement";
import EditAdminAccount from "./components/Admin Management/Edit Admin Account/EditAdminAccount";
import PriceManagement from "./components/Price Management/PriceManagement";
import EditPrice from "./components/Price Management/Edit Price/EditPrice";
import AboutUsManagement from "./components/About Us Management/AboutUsManagement";
import EditAboutUsManagement from "./components/About Us Management/Edit About Us Management/EditAboutUsManagement";
import ApproveProvider from "./components/Approve provider/ApproveProvider";
import EditStatus from "./components/Account Status/editstatus/editstatus";
import DistanceManagement from "./components/Distance Management/DistanceManagement.JSX";
import Details from "./components/Approve Provider/Details";
import EditProvider from "./components/ProviderManagement/EditProvider/editProvider";
import ProviderDetail from "./components/ProviderManagement/ProviderDetail/providerDetail";
import User from "./components/UserManagement/User";
import EditUser from "./components/UserManagement/EditUser/editUser";
import UserDetail from "./components/UserManagement/UserDetail/userDetail";
import VehicleManagement from "./components/VehicleManagement/vehiclemanage";
import EditVehicle from "./components/VehicleManagement/editvehicle/editvehicle";
import TutorialManagement from "./components/Tutorial Management/TutorialManagement";
import EditTutorial from "./components/Tutorial Management/edittutorial/edittutorial";
import AboutDeveloperManagement from "./components/About Developer Management/AboutDeveloperManagement";




function App() {

  const [statuses,setStatuses] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [tutoriales, setTutoriales] = useState([]);


  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "";
  });
  const [slide, setSlide] = useState(false);

  function handleSlide() {
    setSlide(!slide);
  }

  // สร้าง Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  // ฟังก์ชันสําหรับการบันทึก
  const handleSaveEdit = (editedStatus) => {
    setStatuses(statuses.map(type => 
      type.id === editedStatus.id
        ? editedStatus
        : type
    ));
  };

  // ฟังก์ชันบันทึกข้อมูลที่แก้ไขในหน้า EditVehicle
  const handleSaveEditVehicle = (editedVehicle) => {
    setVehicleTypes(vehicleTypes.map(type => 
      type.id === editedVehicle.id
        ? editedVehicle
        : type
    ));
  };

  const handleSaveEditTutorial = (editedTutorial) => {
    setTutoriales(tutoriales.map(type => 
      type.id === editedTutorial.id
        ? editedTutorial
        : type
    ));
  };



  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setToken={setToken} setRole={setRole} token={token} />
            )
          }
        />
        <Route path="/forgot" element={<Forgot />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout
                slide={slide}
                handleSlide={handleSlide}
                setToken={setToken}
                setRole={setRole}
                token={token}
              />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/adminmanagement" element={<AdminManagement />} />
          <Route path="/edit-admin/:id" element={<EditAdminAccount />} />

          <Route path="/permission" element={<Permission />} />

          <Route path="/status" element={<AccountStatus  statuses={statuses} setStatuses={setStatuses}/>} />
          <Route path="/edit-status/:id" element={<EditStatus statuses={statuses} onSave={handleSaveEdit} />} />

          <Route path="/distancemanagement" element={<DistanceManagement />} />

          <Route path="/vehiclemanage" element={<VehicleManagement vehicleTypes={vehicleTypes} setVehicleTypes={setVehicleTypes} />} />
          <Route path="/edit-vehicle/:id" element={<EditVehicle vehicleTypes={vehicleTypes} onSave={handleSaveEditVehicle} />} />

      

          <Route path="/pricemanagement" element={<PriceManagement />} />
          <Route path="/edit-price/:id" element={<EditPrice />} />

          <Route path="/review" element={<Review />} />
          <Route path="/review/CheckDriver" element={<CheckDriver />} />

          <Route path="/adminaccmanagement" element={<AdminAccout />} />

          <Route path="/checkorder" element={<Checkorder />} />
          <Route path="/orderdetails/:orderNumber" element={<OrderDetails />} />

          <Route path="/bannermanagement" element={<BannerManagement />} />

          <Route path="/approveprovider" element={<ApproveProvider />} />          <Route path="/details/:id" element={<Details />} />          <Route path="/userManagement" element={<User />} />
          <Route path="/edituser/:userId" element={<EditUser />} />
          <Route path="/userdetail/:userId" element={<UserDetail />} />
          
          <Route path="/providerManagement" element={<Provider />} /> 
          <Route path="/editprovider/:providerId" element={<EditProvider />} />
          <Route path="/providerdetail/:providerId" element={<ProviderDetail />} />

          <Route path="/tutorialmanagement" element={<TutorialManagement tutoriales={tutoriales} setTutoriales={setTutoriales} />} />
          <Route path="/edit-tutorial/:id" element={<EditTutorial tutoriales={tutoriales} onSave={ handleSaveEditTutorial} />} />

          <Route path="/aboutusmanagement" element={<AboutUsManagement />} />
          <Route path="/about-edit/:id" element={<EditAboutUsManagement />} />

          <Route path="/aboutdevelopermanagement" element={<AboutDeveloperManagement />} />
        </Route>

        {/* Catch all route */}
        <Route
          path="*"
          element={
            token ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
