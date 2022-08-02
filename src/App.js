import React, { useState } from "react";
import UserOtp from "./components/Pages/UserOtp";
import PhoneConfirm from "./components/Pages/PhoneConfirm";
import Signup from "./components/Pages/Signup";
import SignupDelivery from "./components/Pages/SignupDelivery";
import UserForm from "./components/Pages/UserForm";
import WelcomeUser from "./components/Pages/WelcomeUser";
import ForgotNumber from "./components/Pages/ForgotNumber";
import AsIndividual from "./components/Pages/AsIndividual";
import AsFleet from "./components/Pages/AsFleet";
import DeliveryOtp from "./components/Pages/DeliveryOtp";
import Success from "./components/Pages/Success";
import FleetVehicle from "./components/Pages/FleetVehicle";
import IndividualVehicle from "./components/Pages/IndividualVehicle";
import AgentCompleted from "./components/Pages/AgentCompleted";
import UserRequestPickup from "./components/usersFlow/NavsFlow/UserRequestPickup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoggedinMainPage from "./Shadow/LoggedinMainPage";
import Main from "./Shadow/javascripts/Main";
import { FleetOtp } from "./components/Pages/DeliveryOtp";
import ResquestPickup from "./Shadow/Pages/DeliveryRequest/Request_pickup/ResquestPickup";
import DeliveryType from "./components/usersFlow/DeliveryType";
import FormUserDelivery from "./components/usersFlow/NavsFlow/FormUserDelivery";
import SelectAgent from "./components/usersFlow/NavsFlow/SelectAgent";
import InstantDeliverySummary, {
  InstantDeliverySummary1,
} from "./components/usersFlow/NavsFlow/InstantDeliverySummary";
import UserScheduledDeliveryHistory from "./components/usersFlow/NavsFlow/UserScheduledDeliveryHistory";
import CancelledScheduled from "./components/usersFlow/NavsFlow/CancelledScheduled";
import PaymentSuccess from "./components/usersFlow/PaymentSuccess";
import PendingDeliveryPickup from "./components/usersFlow/NavsFlow/PendingDeliveryPickup";
import PendingInstantDetails from "./components/usersFlow/NavsFlow/PendingInstantDetails";
import PendingScheduledDetails from "./components/usersFlow/NavsFlow/PendingScheduledDetails";
import CancelBooking from "./components/usersFlow/CancelBooking";
import CancelReason from "./components/usersFlow/CancelReason";
import CompletedDeliveries from "./components/usersFlow/NavsFlow/CompletedDeliveries";
import DeliveryHistoryDetails from "./components/usersFlow/NavsFlow/UserInstantDeliveryHistory";
import ReportReason from "./components/usersFlow/ReportReason";
import ReportThanks from "./components/usersFlow/ReportThanks";
import LeaveReview from "./components/usersFlow/LeaveReview";
import ReviewThanks from "./components/usersFlow/ReviewThanks";
import UsersProfile from "./components/usersFlow/NavsFlow/UsersProfile";
import Logout from "./components/usersFlow/NavsFlow/Logout";
import ScheduleForm from "./components/usersFlow/NavsFlow/ScheduleForm";
import ScheduledDeliverySummary from "./components/usersFlow/NavsFlow/ScheduledDeliverySummary";
import RequestSuccess from "./components/usersFlow/RequestSuccess";
import RequestLocation from "./Shadow/Pages/DeliveryRequest/Request_pickup_Location/RequestLocation";
import RequestPickupDetails from "./Shadow/Pages/DeliveryRequest/Request_pickup_Details/RequestPickupDetails";
import PendingDeliveryPickupAgent from "./Shadow/Pages/Pending_deliveries/Pending_delivery_pickup/PendingDeliveryPickup";
import PendingDeliveryspecificsAgent from "./Shadow/Pages/Pending_deliveries/Delivery_Specifics/PendingDeliveryspecificsAgent";
import CompletedDeliveriesAgent from "./components/usersFlow/NavsFlow/CompletedDeliveriesAgent";
import DeliveryHistoryDetailsAgent, {
  ScheduledHistoryDetailsAgent,
} from "./Shadow/Pages/DeliveryHistorys/DeliveryHistoryDetails/DeliveryHistoryDetails";
import ChatAdmin from "./Shadow/Pages/Chatpage/ChatAdmin";

export default function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            exact
            path="/"
            element={<LoggedinMainPage name={<Main />} logged={false} />}
          />
          <Route path="join" element={<Signup />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="fleet" element={<AsFleet />} />
          <Route path="confirm" element={<PhoneConfirm />} />
          <Route path="otp" element={<UserOtp />} />
          <Route path="welcome" element={<WelcomeUser />} />
          <Route path="forgot" element={<ForgotNumber />} />
          <Route path="sign" element={<SignupDelivery />} />
          <Route path="individual" element={<AsIndividual />} />
          <Route path="otp3" element={<FleetOtp />} />
          <Route path="otp2" element={<DeliveryOtp />} />
          <Route path="individual-v" element={<IndividualVehicle />} />
          <Route path="fleet-v" element={<FleetVehicle />} />
          <Route path="account" element={<AgentCompleted />} />
          <Route path="success" element={<Success />} />
          <Route
            path="Deliveryrequest"
            element={
              <LoggedinMainPage name={<ResquestPickup />} logged={true} />
            }
          />
          <Route path="userflow" element={<UserRequestPickup />} />
          <Route path="type" element={<DeliveryType />} />
          <Route path="formuser" element={<FormUserDelivery />} />
          <Route path="select-a" element={<SelectAgent />} />
          <Route path="summary-i" element={<InstantDeliverySummary />} />
          <Route path="paysuccess" element={<PaymentSuccess />} />
          <Route path="pending-del" element={<PendingDeliveryPickup />} />
          <Route path="pending-instant" element={<PendingInstantDetails />} />
          <Route
            path="pending-scheduled"
            element={<PendingScheduledDetails />}
          />
          <Route path="cancel-booking" element={<CancelBooking />} />
          <Route path="cancel-reason" element={<CancelReason />} />
          <Route path="completed-del" element={<CompletedDeliveries />} />
          <Route path="user-instant" element={<DeliveryHistoryDetails />} />
          <Route
            path="user-schedule"
            element={<UserScheduledDeliveryHistory />}
          />
          <Route path="cancelled-details" element={<CancelledScheduled />} />
          <Route path="report" element={<ReportReason />} />
          <Route path="report-thanks" element={<ReportThanks />} />
          <Route path="review" element={<LeaveReview />} />
          <Route path="review-thanks" element={<ReviewThanks />} />
          <Route path="user-profile" element={<UsersProfile />} />
          <Route path="user-logout" element={<Logout />} />
          <Route path="schedule-form" element={<ScheduleForm />} />
          <Route
            path="scheduled-summary"
            element={<ScheduledDeliverySummary />}
          />
          <Route path="request-success" element={<RequestSuccess />} />
          <Route
            path="request-location"
            element={
              <LoggedinMainPage name={<RequestLocation />} logged={true} />
            }
          />
          <Route
            path="request-details"
            element={
              <LoggedinMainPage name={<RequestPickupDetails />} logged={true} />
            }
          />
          <Route
            path="pendingdeliveries"
            element={
              <LoggedinMainPage
                name={<PendingDeliveryPickupAgent />}
                logged={true}
              />
            }
          />
          <Route
            path="Specificpickupdetails"
            element={
              <LoggedinMainPage
                name={<PendingDeliveryspecificsAgent />}
                logged={true}
              />
            }
          />
          <Route
            path="deliveryhistory"
            element={
              <LoggedinMainPage
                name={<CompletedDeliveriesAgent />}
                logged={true}
              />
            }
          />
          <Route
            path="deliveryhistorydetails"
            element={
              <LoggedinMainPage
                name={<DeliveryHistoryDetailsAgent />}
                logged={true}
              />
            }
          />
          <Route
            path="scheduledhistorydetails"
            element={
              <LoggedinMainPage
                name={<ScheduledHistoryDetailsAgent />}
                logged={true}
              />
            }
          />
          <Route
            path="Chatwithadmin"
            element={<LoggedinMainPage name={<ChatAdmin />} logged={true} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
