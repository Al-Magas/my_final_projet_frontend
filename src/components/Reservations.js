import Formulaire from "./Formulaire";

function Reservations({ availableTimes, dispatch,submitForm }) {
    return (
        <div className="reservationHeader">
            <h2>Réservez une table</h2>
            <Formulaire
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </div>
    );
}

export default Reservations;
