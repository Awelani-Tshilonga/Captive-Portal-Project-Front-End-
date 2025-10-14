// src/utils/validation.js

// ✅ Only letters and spaces
export const validateTextOnly = (text) => /^[A-Za-z\s]+$/.test(text);

// ✅ Simple email format check
export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ✅ Phone: 10–15 digits only
export const validatePhone = (phone) => /^\d{10,15}$/.test(phone);
