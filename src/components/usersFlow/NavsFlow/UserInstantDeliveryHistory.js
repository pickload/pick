import React, { useState, useEffect, useContext } from "react";
import { DeliveryImages } from "../Details info/DeliveryImages";
import Checkout from "../../Images/checkoutprogress.png";
// import "./deliveryhistorydetails.css";
import "../../../Shadow/Pages/DeliveryHistorys/DeliveryHistoryDetails/deliveryhistorydetails.css";
import { DeliverInfo2 } from "../Details info/DeliverInfo";
import Flag from "../../Images/flag.png";
import Arrow from "../../Images/Arrow.png";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "../../javascript/Popup";
import ReportReason from "../ReportReason";
import LeaveReview from "../LeaveReview";
import { DateConverter } from "../../../DateAndTimeConverter";
import { TimeConverter } from "../../../DateAndTimeConverter";
import { ClipLoader } from "react-spinners";
import { userContext } from "../../../Shadow/Pages/Contexts/RiderContext";
import Millisecond from "./Millisecond";

export default function DeliveryHistoryDetails() {
  const getMinutes = (milliseconds) => {
    const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, milliseconds));
    return [
      d.getUTCHours() > 0 ? d.getUTCHours() : null,
      d.getUTCMinutes() > 0 ? d.getUTCMinutes() : null,
    ];
  };
  const navigate = useNavigate();

  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [reviewButton, setReviewButton] = useState(false);
  const [popupButton, setPopupButton] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [deliveryImages, setDeliveryImages] = useState([]);
  const [milli, setMilli] = useState("");
  const userValues = useContext(userContext);
  const { token } = userValues;
  // const [pickDate, setPickDate] = useState(Number);

  const Delivery_id = location.state.id;

  const fetchDeliveryDetails = async () => {
    const res = await fetch(
      "https://ancient-wildwood-73926.herokuapp.com/user_delivery/single_delivery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: JSON.parse(token),
          delivery_id: Delivery_id,
        }),
      }
    );
    const data = await res.json();
    const results = await data;
    setLoading(false);
    // console.log(results);
    setDeliveryDetails(results?.delivery);
    setDeliveryImages(results?.delivery.imgs);
    setMilli(results?.delivery.delivered_in);
  };

  useEffect(() => {
    fetchDeliveryDetails();
  }, []);

  // const img_ids = deliveryDetails.img_ids;
  // const imgs = deliveryDetails.imgs;
  // const urls = imgs.join(", ");
  // console.log(urls);
  if (loading === true) {
    return (
      <div className="loader-screen">
        <ClipLoader color={"#1AA803"} loading={loading} size={100} />
        <p>Loading...</p>
      </div>
    );
  } else
    return (
      <section className="user-dashboard pending-delivery no-max">
        <div className="history-wrapper-1">
          <div className="specific-details-section">
            <div
              id="arrow-div"
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={Arrow} alt="" />
            </div>
            <br />
            <br />
            <h3>Instant Delivery ID: {deliveryDetails?.parcel_code} </h3>
            <div className="delivery-details-pictures specifics-images">
              {deliveryDetails.imgs?.map((item, index) => (
                <li key={index}>
                  <DeliveryImages rectangle={item} />
                </li>
              ))}
            </div>
            <br />
            <h3>Delivery status</h3>
            <div className="delivery-details-location">
              <div className="delivery-deatails-location-pickup">
                <div className="location-img">
                  <img src={Checkout} alt="" />
                </div>
                <h3>Item Received by Delivery Agent at the Pickup Location </h3>
                <p>
                  {<TimeConverter value={deliveryDetails?.timestamp} />} on{" "}
                  {<DateConverter value={deliveryDetails?.timestamp} />}
                </p>
                <h3>Item Received by User at the Drop off location </h3>
                <p>
                  {" "}
                  {
                    <TimeConverter
                      value={deliveryDetails?.delivery_status.is_completed_at}
                    />
                  }{" "}
                  on{" "}
                  {
                    <DateConverter
                      value={deliveryDetails?.delivery_status.is_completed_at}
                    />
                  }
                </p>
              </div>
            </div>
            <div className="estimatedtime">
              <h2>
                Your item arrived at your location in {getMinutes(milli)}{" "}
                minute(s)
              </h2>
            </div>
            <br />
            <br />

            <h3>Delivery Details</h3>

            <div className="delivery-profile1">
              <div className="driver-profile-image">
                <div className="image">
                  <img src={deliveryDetails.delivery_agent_img} alt="" />{" "}
                </div>
              </div>
              <div className="delivery-profile-details">
                <table>
                  <tr>
                    <th>Delivery Agent :</th>
                    <td>{deliveryDetails?.delivery_agent_name}</td>
                  </tr>
                  <tr>
                    <th>Vehicle Type :</th>
                    <td>{deliveryDetails.delivery_agent_vehicle_type}</td>
                  </tr>
                  <tr>
                    <th>Vehicle Color :</th>
                    <td>{deliveryDetails.delivery_agent_vehicle_color}</td>
                  </tr>
                  <tr>
                    <th>Agent ID :</th>
                    <td>{deliveryDetails.delivery_agent_id}</td>
                  </tr>
                  <tr>
                    <th>Plate Number :</th>
                    <td>{deliveryDetails.delivery_agent_plate_no}</td>
                  </tr>
                  <tr>
                    <th>Phone Number :</th>
                    <td>{deliveryDetails.delivery_agent_phone_no}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="delivery-history-info">
              <DeliverInfo2
                sender={deliveryDetails.sender_fullname}
                sender_no={`0${deliveryDetails.sender_phone_no}`}
                receiver={deliveryDetails.reciever_name}
                receiver_no={`0${deliveryDetails.reciever_phone_no}`}
                parcel_name={deliveryDetails.parcel_name}
                parcel_type={deliveryDetails.parcel_type}
                description={deliveryDetails.parcel_description}
                instruction={deliveryDetails.delivery_instructions}
              />
            </div>
            <br />

            <div className="report-user">
              <div>
                <img src={Flag} alt="" />
              </div>
              <p
                onClick={() => {
                  setPopupButton(true);
                }}
              >
                Report this Delivery
              </p>
              <button
                onClick={() => {
                  setReviewButton(true);
                }}
              >
                Leave a Review
              </button>
            </div>
            <br />
          </div>
          <Popup trigger={popupButton} setTrigger={setPopupButton}>
            <ReportReason
              delivery_id={Delivery_id}
              parcel_code={deliveryDetails.parcel_code}
              img_ids={deliveryDetails.img_ids}
              imgs={deliveryImages.join(", ")}
              agentName={deliveryDetails.delivery_agent_name}
              delivery_agent_code={deliveryDetails.delivery_agent_code}
              delivery_agent_id={deliveryDetails.delivery_agent_id}
              delivery_agent_img={deliveryDetails.delivery_agent_img}
              delivery_agent_img_id={deliveryDetails.delivery_agent_img_id}
              delivery_agent_email={deliveryDetails.delivery_agent_email}
              user_email={deliveryDetails.sender_email}
              delivery_type={deliveryDetails.delivery_type}
              sender_fullname={deliveryDetails.sender_fullname}
              sender_id={deliveryDetails.sender_id}
            />
          </Popup>
          <Popup trigger={reviewButton} setTrigger={setReviewButton}>
            <LeaveReview agentId={deliveryDetails.delivery_agent_id} />
          </Popup>
        </div>
      </section>
    );
}
