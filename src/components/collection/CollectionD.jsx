import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaRegCalendarAlt,
} from "react-icons/fa";

import "./collectionD.css";

const CollectionD = () => {
  const stats = [
    {
      icon: <FaMoneyCheckAlt />,
      title: "Paid",
      value: "01",

      color: "#D9D9D9",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Received",
      value: "35",
      color: "#D9D9D9",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Dues",
      value: "26",
      color: "#D9D9D9",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Dues",
      value: "26",
      color: "#D9D9D9",
    },
  ];

  return (
    <>
      <section className="collection_section">
        <div className="container mt-4 my-4">
          <div className="row my-2">
            <div className="col-md-6">
              <h3>Collection</h3>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 text-sm-end">
                  <div className="collection_inner years">
                    Years &nbsp;
                    <IoIosArrowForward />
                  </div>
                </div>
                <div className="col-md-6 text-sm-end">
                  <div className="collection_inner views">
                    Views &nbsp;
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}

          <div className="collectiond_stats-overview">
            {stats.map((stat, index) => (
              <div className="collectiond_stat-card" key={index}>
                <div className="collectiond_stat-content">
                  <div
                    className="collectiond_stat-icon"
                    style={{ backgroundColor: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <p>{stat.title}</p>
                </div>

                <p className="text-center my-1">Amt</p>

                {/* <div className="collectiond_stat-content">
                  <p className="collectiond_stat-value">{stat.value}</p>
                  <div
                  className="collectiond_stat-icon"
                  style={{ backgroundColor: stat.color }}
                >
                  {stat.icon}
                </div>
                </div>
                <p className="collectiond_stat-title">{</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionD;
