import React, { useState, useEffect } from "react";
import { PendingDeliveryList } from "../Details info/PendingDeliveryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./deliveryhistory.css";
import LoggedinMainPage from "./LoggedinMainPage";
import { useNavigate } from "react-router-dom";
import { HistoryList, InstantHistoryList } from "../Details info/HistoryList";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CompletedDeliveries() {
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [completedDeliveries, setCompletedDeliveries] = useState([]);
  const [cancelledDeliveries, setCancelledDeliveries] = useState([]);
  const navigate = useNavigate();
  const [searchItems, setSearchItems] = useState("");
  const search = `${faSearch} Nike Boots`;

  const fetchCompletedDeliveries = async () => {
    const res = await fetch(
      "https://ancient-wildwood-73926.herokuapp.com/user_delivery/completed_history",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pagec: 1,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBlNjdiODQ1M2EzNzIyMjc1N2I3OGMiLCJwaG9uZV9ubyI6IisyMzQ4MTU3NTQyODIwIiwiaWF0IjoxNjYxODg4NDUzfQ.ZcLApAMCMxmo17pp17Bu9nJ0d_G_vvkhfZekLrrkjis",
          user_id: "62d6fed8e58a29217b404b22",
        }),
      }
    );
    const data = await res.json();
    const results = await data;
    setLoading(false);
    setCompletedDeliveries(results?.deliveries);
    // pendingDeliveries.map((item) => console.log(item));
  };

  const fetchCancelledDeliveries = async () => {
    const res = await fetch(
      "https://ancient-wildwood-73926.herokuapp.com/user_delivery/cancel_history",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pagec: 1,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBlNjdiODQ1M2EzNzIyMjc1N2I3OGMiLCJwaG9uZV9ubyI6IisyMzQ4MTU3NTQyODIwIiwiaWF0IjoxNjYxODg4NDUzfQ.ZcLApAMCMxmo17pp17Bu9nJ0d_G_vvkhfZekLrrkjis",
          user_id: "62d6fed8e58a29217b404b22",
        }),
      }
    );
    const data = await res.json();
    const results = await data;
    setLoading(false);
    setCancelledDeliveries(results?.deliveries);
    // pendingDeliveries.map((item) => console.log(item));
  };

  useEffect(() => {
    fetchCompletedDeliveries();
    fetchCancelledDeliveries();
  }, []);

  const firstClick = () => {
    setToggle(true);
  };

  const secondClick = () => {
    setToggle(false);
  };

  return (
    <section className="user-dashboard pending-delivery specifics no-max">
      <div className="history-wrapper-2">
        <div className="pending-delivery-pickup-slides">
          <br />
          <br />
          <div className="toggle-div">
            <div
              className="first-toggle"
              onClick={firstClick}
              id={toggle ? "active" : "inactive2"}
            >
              Completed Deliveries
            </div>
            <div
              className="second-toggle"
              onClick={secondClick}
              id={toggle ? "inactive" : "active2"}
            >
              Cancelled Deliveries
            </div>
          </div>
        </div>

        <div className="calender-container">
          <input className="calendar" type="date" />

          {/* </input> */}
        </div>
        <div className="search-box-container">
          <input
            type="text"
            placeholder="Search"
            className="search-box-1"
            onChange={(e) => setSearchItems(e.target.value)}
          />
        </div>

        {toggle === true
          ? completedDeliveries
              ?.filter((value) => {
                if (value === "") {
                  return value;
                } else if (
                  value.parcel_name
                    .toLowerCase()
                    .includes(searchItems.toLowerCase())
                ) {
                  return searchItems;
                }
              })
              ?.map((pObj) => (
                <InstantHistoryList
                  // click={handleClick}
                  click={
                    pObj.delivery_type === "instant"
                      ? () => {
                          navigate("/user/user-instant", {
                            state: { id: pObj._id },
                          });
                        }
                      : pObj.delivery_type === "scheduled"
                      ? () => {
                          navigate("/user/user-schedule", {
                            state: { id: pObj._id },
                          });
                        }
                      : null
                  }
                  parcelname={pObj.parcel_name}
                  parcelcode={pObj.parcel_code}
                  deliverytype={pObj.delivery_type}
                  deliveryimage={pObj.imgs[0]}
                />
              ))
          : cancelledDeliveries
              ?.filter((value) => {
                if (value === "") {
                  return value;
                } else if (
                  value.parcel_name
                    .toLowerCase()
                    .includes(searchItems.toLowerCase())
                ) {
                  return searchItems;
                }
              })
              ?.map((item) => (
                <InstantHistoryList
                  click={() => {
                    navigate("/user/cancelled-details", {
                      state: { id: item._id },
                    });
                  }}
                  parcelname={item.parcel_name}
                  parcelcode={item.parcel_code}
                  deliverytype={item.delivery_type}
                  deliveryimage={item.imgs[0]}
                />
              ))}

        <div className="pending-delivery-pickup-entries">
          <h6>
            Showing <span>1</span> to <span>10</span> of <span>30</span> entries
          </h6>
          <div>
            <FontAwesomeIcon icon={faAngleLeft} className="icon-space" />{" "}
            <h6>View more</h6>
            <FontAwesomeIcon icon={faAngleRight} className="icon-space" />
          </div>
        </div>
      </div>
    </section>
  );
}
