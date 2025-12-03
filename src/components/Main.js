import { Routes, Route, useNavigate  } from "react-router-dom";
import { useReducer } from "react";
import Accueil from "./Accueil";
import Apropos from "./Apropos";
import Menu from "./Menu";import Reservations from "./Reservations";
import { fetchAPI, submitAPI } from "./Api"; // corrige le chemin selon ton projet
import ConfirmationReservation from "./ConfirmationReservation";
import App from "../App";

// --- Reducer ---
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === "update_times") {
    return fetchAPI(action.date);
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
 const navigate = useNavigate();

  // Fonction submitForm pour la réservation
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/reservation-confirmed"); // redirection vers la page de confirmation
    }
  };
  return (
    <main>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
          }
        />
         <Route
          path="/reservation-confirmed"
          element={<ConfirmationReservation />}
         />
      </Routes>
    </main>
  );
}

export default Main;
