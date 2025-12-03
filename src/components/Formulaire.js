import { submitAPI } from "./Api"; // corrige le chemin selon ton projet
import { useState, useEffect } from "react";
function Formulaire({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  // Vérifie la validité à chaque changement
  useEffect(() => {
    const valid =
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== "";
    setIsFormValid(valid);
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "update_times", date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { date, time, guests, occasion };
    submitForm(formData); // on utilise la fonction transmise depuis Main
  };


  return (
    <form
    onSubmit={handleSubmit}
    style={{ display: "grid", gap: "20px", maxWidth: "250px" }}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">-- select --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />
      <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="">-- select --</option>
        <option value="Anniversaire">Anniversaire</option>
        <option value="Mariage">Mariage</option>
        <option value="Affaire">Réunion d'affaire</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
}

export default Formulaire;
