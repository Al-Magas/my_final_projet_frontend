// src/api.js

// Simule les heures disponibles pour une date donnée
export function fetchAPI(date) {
  const data = {
    '2025-12-03': ['12:00', '13:00', '14:00'],
    '2025-12-04': ['09:00', '10:00', '11:00'],
  };
  const key = date instanceof Date ? date.toISOString().split('T')[0] : date;
  return data[key] || ['12:00', '13:00', '14:00']; // valeurs par défaut si date inconnue
}

// Simule l'envoi du formulaire
export function submitAPI(formData) {
  console.log('Formulaire soumis :', formData);
  return true; // succès simulé
}
