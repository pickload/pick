import React from "react";
import "./findingdeliveries.css";
// import loadingimage from "../images/loadingimage.png";
import Loading from "../../../components/Images/loading.png";

// export const FindingDeliveries = () => {
//   return (
//     <section className="loading-state">
//       <div className="loading-state-wrapper">
//         <div className="loading-state-image-container">
//           <img src={loadingimage} alt="" />
//         </div>
//         <div className="loading-state-text-container">
//           <h4>
//             Please wait while pickload pairs you with the closest available
//             Pickup Request
//           </h4>
//         </div>
//       </div>
//     </section>
//   );
// };

export const FindingDeliveriesUser = () => {
  return (
    <section className="loading-state">
      <div className="loading-state-wrapper">
        <div className="loading-state-image-container">
          <img src={Loading} alt="" />
        </div>
        <div className="loading-state-text-container">
          <h4>
            Please wait while pickload pairs you with the closest available
            Delivery Agent...
          </h4>
        </div>
      </div>
    </section>
  );
};