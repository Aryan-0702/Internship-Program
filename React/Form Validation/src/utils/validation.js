export const validateName = (name) => {
  if (!name.trim()) return "Name is required";
  if (name.length < 3) return "Name must be at least 3 characters";
  return "";
};

export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Invalid email format";
  return "";
};

export const validatePassword = (pass) => {
  if (!pass) return "Password required";
  if (pass.length < 6) return "Minimum 6 characters";
  if (!/[A-Z]/.test(pass)) return "Must contain uppercase";
  if (!/[0-9]/.test(pass)) return "Must contain number";
  return "";
};