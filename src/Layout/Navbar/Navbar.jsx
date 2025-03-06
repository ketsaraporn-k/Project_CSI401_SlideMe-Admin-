import React from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../imgs/logo.png";

function Sidebar({ slide, setToken, setRole, token }) {
  const currentTab = useLocation();
  const navigate = useNavigate();

  if (token === "superadmin") {
    return (
      <div className={slide ? "sidebar toggle" : "sidebar"}>
        <div className="sidebar-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="sidebar-menu">
          <Link to="/dashboard">
            <button
              className={`my-1 menu-item font-semibold ${
                (currentTab.pathname === "/dashboard" && "active") ||
                (currentTab.pathname === "/" && "active")
              }`}
            >
              Dashboard
            </button>
          </Link>

          <Link to="/adminmanagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/adminmanagement" && "active"
              }`}
            >
              Admin Management
            </button>
          </Link>

          <Link to="/permission">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/permission" && "active"
              }`}
            >
              Permission Management
            </button>
          </Link>

          <Link to="/status">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/status" && "active"
              }`}
            >
              Status Management
            </button>
          </Link>

          <Link to="/distancemanagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/distancemanagement" && "active"
              }`}
            >
              Distance Management
            </button>
          </Link>

          <Link to="/vehiclemanage">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/vehiclemanage" && "active"
              }`}
            >
              Vehicle Management
            </button>
          </Link>

          <Link to="/pricemanagement">
            {" "}
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/pricemanagement" && "active"
              }`}
            >
              Price Management
            </button>
          </Link>

          <Link to="/checkorder">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/checkorder" && "active"
              }`}
            >
              Check Order Management
            </button>
          </Link>

          <Link to="/approveprovider">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/approveprovider" && "active"
              }`}
            >
              Approveprovider Management
            </button>
          </Link>

          <Link to="/review">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/review" && "active"
              }`}
            >
              Review Management
            </button>
          </Link>

          <Link to="/userManagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/userManagement" && "active"
              }`}
            >
              User Management
            </button>
          </Link>

          <Link to="/providerManagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/providerManagement" && "active"
              }`}
            >
              Provider Management
            </button>
          </Link>

          <Link to="/bannermanagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/bannermanagement" && "active"
              }`}
            >
              Banner Management
            </button>
          </Link>

          <Link to="/tutorialmanagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/tutorialmanagement" && "active"
              }`}
            >
              Tutorial Management
            </button>
          </Link>

          <Link to="/aboutusmanagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/aboutusmanagement" && "active"
              }`}
            >
              About Us Management
            </button>
          </Link>

          <Link to="/aboutdevelopermanagement">
            <button
              className={`my-1 menu-item font-semibold ${
                currentTab.pathname === "/aboutdevelopermanagement" && "active"
              }`}
            >
              About Developer
            </button>
          </Link>

        </ul>



        <div
          onClick={() => {
            Swal.fire({
              title: "ยืนยันออกจากระบบ",
              text: "กดยืนยันเพื่อออกจากระบบ",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "ยืนยัน",
              cancelButtonText: "ยกเลิก",
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                setToken("");
                setRole("");
                Swal.fire({
                  title: "ออกจากระบบสำเร็จ!",
                  icon: "success",
                  confirmButtonText: "เสร็จสิ้น",
                }).then(() => {
                  navigate("/login", { replace: true });
                });
              }
            });
          }}
          className="sidebar-logout mb-auto mt-20"
        >
          <button>Logout</button>
        </div>
      </div>
    );
  } 
  else {
    return (
      <div className={slide ? "sidebar toggle" : "sidebar"}>
        <div className="sidebar-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="sidebar-menu">
          <Link to="/dashboard">
            <button
              className={`my-1 menu-item ${
                (currentTab.pathname === "/dashboard" && "active") ||
                (currentTab.pathname === "/" && "active")
              }`}
            >
              Dashboard
            </button>
          </Link>
        </ul>
        <div
          onClick={() => {
            Swal.fire({
              title: "ยืนยันออกจากระบบ",
              text: "กดยืนยันเพื่อออกจากระบบ",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "ยืนยัน",
              cancelButtonText: "ยกเลิก",
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                setToken("");
                setRole("");
                Swal.fire({
                  title: "ออกจากระบบสำเร็จ!",
                  icon: "success",
                  confirmButtonText: "เสร็จสิ้น",
                }).then(() => {
                  navigate("/login", { replace: true });
                });
              }
            });
          }}
          className="sidebar-logout mb-auto mt-20"
        >
          <button>Logout</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
