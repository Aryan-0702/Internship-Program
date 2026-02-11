import { useState, useEffect } from "react";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../utils/validation";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  /* Load saved data */
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  /* Save data */
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
  }, [form]);

  // input event
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    validateField(name, value);
  };

  // blur event
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let msg = "";

    if (name === "name") msg = validateName(value);
    if (name === "email") msg = validateEmail(value);
    if (name === "password") msg = validatePassword(value);

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  // submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((e) => e);

    if (hasError) return alert("Fix errors first");

    alert("Form submitted successfully!");
    localStorage.removeItem("formData");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="inputGroup">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? "errorInput" : ""}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="inputGroup">
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? "errorInput" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="inputGroup">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password ? "errorInput" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}