"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add code to send the form data (e.g., fetch or axios)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Imię"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">+48</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Telefon"
          value={formData.phone}
          style={{ paddingLeft: "3em" }}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          maxLength={512}
          required
        />
      </div>

      <button type="submit">Wyślij</button>
    </form>
  );
}
