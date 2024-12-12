import React from "react";
import { FaBuilding, FaBed, FaUserFriends } from "react-icons/fa";
import "./carddetails.css";

const CardDetals = () => {
  const stats = [
    {
      icon: <FaBuilding />,
      title: "Properties",
      value: "01",
      color: "#FFADFA",
    },
    {
      icon: <FaBed />,
      title: "Beds",
      value: "35",
      color: "#ADB4FF",
    },
    {
      icon: <FaUserFriends />,
      title: "Tenants",
      value: "26",
      color: "#CAFFAD",
      isTenants: true,
    },
    {
      icon: <FaUserFriends />,
      title: "Tenants",
      value: "26",
      color: "#CAFFAD",
      isTenants: true,
    },
    {
      icon: <FaUserFriends />,
      title: "Tenants",
      value: "26",
      color: "#CAFFAD",
      isTenants: true,
    },
    {
      icon: <FaUserFriends />,
      title: "Tenants",
      value: "26",
      color: "#CAFFAD",
      isTenants: true,
    },
  ];
  return (
    <div className="stats-overview">
      {stats.map((stat, index) => (
        <div
          className={`stat-card ${stat.isTenants ? "tenants-card" : ""}`}
          key={index}
        >
          <div className="stat-content">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-title">{stat.title}</p>
          </div>
          <div className="stat-icon" style={{ backgroundColor: stat.color }}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDetals;
