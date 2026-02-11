import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }

    emailjs
      .send(
        "service_th1md4s",     
        "template_u1ivfy9",    
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "HDq8lEBMKJ59d2lUr"      
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;