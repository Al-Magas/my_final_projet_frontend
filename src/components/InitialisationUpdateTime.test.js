import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../api";

// Mock de fetchAPI pour les tests
jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("Reducer Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes retourne les horaires du jour", () => {
    const mockTimes = ["12:00", "13:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes met à jour les horaires selon la date", () => {
    const mockTimes = ["09:00", "10:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const state = [];
    const action = { type: "update_times", date: "2025-12-04" };

    const result = updateTimes(state, action);
    expect(fetchAPI).toHaveBeenCalledWith(action.date);
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes retourne le state inchangé si type inconnu", () => {
    const state = ["08:00"];
    const action = { type: "unknown" };

    const result = updateTimes(state, action);
    expect(result).toEqual(state);
  });
});
