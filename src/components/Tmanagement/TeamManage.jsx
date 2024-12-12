import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "./teammanage.css";

const TeamManage = () => {
  const stats = [
    {
      icon: <FaMoneyCheckAlt />,
      title: "Move-outs",
      value: "0",
      color: "#D9D9D9",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Aggreements end",
      value: "0",
      color: "#D9D9D9",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Move-outs",
      value: "0",
      color: "#D9D9D9",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Aggreements end",
      value: "0",
      color: "#D9D9D9",
    },
  ];

  return (
    <>
      <section className="collection_section">
        <div className="container mt-4 my-4">
          <div className="row my-2">
            <div className="col-md-6">
              <h3>Tenant Management</h3>
            </div>
            <div className="col-md-6 text-sm-end">
              <div className="teammanage_inner">
                Time Duration &nbsp;
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="row teammanage_stats-overview">
            {stats.map((stat, index) => (
              <div className="col-xl-3 col-md-6 col-sm-6 mb-4 " key={index}>
                <div className="teammanage_stat-card">
                  <div className="teammanage_stat-content">
                    <div
                      className="teammanage_stat-icon"
                      style={{ backgroundColor: stat.color }}
                    >
                      {stat.icon}
                    </div>
                    <div className="icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <p className="mt-4">{stat.title}</p>
                  <h4 className="my-1">{stat.value}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamManage;
