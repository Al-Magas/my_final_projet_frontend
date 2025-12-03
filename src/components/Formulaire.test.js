import { render, screen, fireEvent } from "@testing-library/react";
import Formulaire from "./Formulaire";
import { submitAPI } from "../api";

// Mock submitAPI
jest.mock("../api", () => ({
  submitAPI: jest.fn(),
}));

describe("Formulaire Component", () => {
  const dispatchMock = jest.fn();
  const availableTimes = ["12:00", "13:00"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("affiche les horaires disponibles", () => {
    render(<Formulaire availableTimes={availableTimes} dispatch={dispatchMock} />);

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3); // "-- select --" + 2 horaires
    expect(options[1].textContent).toBe("12:00");
    expect(options[2].textContent).toBe("13:00");
  });

  test("dispatch est appelé quand la date change", () => {
    render(<Formulaire availableTimes={availableTimes} dispatch={dispatchMock} />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-12-03" } });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "update_times",
      date: "2025-12-03",
    });
  });

  test("submitAPI est appelé et récapitulatif affiché après soumission", () => {
    submitAPI.mockReturnValue(true);

    render(<Formulaire availableTimes={availableTimes} dispatch={dispatchMock} />);

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-12-03" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "12:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Mariage" } });

    fireEvent.click(screen.getByRole("button", { name: /Make Your reservation/i }));

    expect(submitAPI).toHaveBeenCalledWith({
      date: "2025-12-03",
      time: "12:00",
      guests: 2,
      occasion: "Mariage",
    });

    expect(screen.getByText(/Récapitulatif/i)).toBeInTheDocument();
    expect(screen.getByText(/12:00/)).toBeInTheDocument();
    expect(screen.getByText(/Mariage/)).toBeInTheDocument();
  });
});
