import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    college: "",
    email: "",
    password: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) {
      return "Name is required";
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(form.email)) {
      return "Enter a valid email address";
    }

    if (form.password.length < 8) {
      return "Password must be at least 8 characters";
    }

    return ""; // no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setError(err);
  };

  return (
    <div className="container">
      {/* INLINE CSS */}
      <style>{`
        .container {
          width: 400px;
          margin: 40px auto;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        label {
          font-weight: bold;
        }

        input {
          padding: 8px;
          font-size: 15px;
          border: 1px solid #aaa;
          border-radius: 5px;
        }

        button {
          padding: 10px;
          background: #333;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }

        button:hover {
          opacity: 0.9;
        }

        .error {
          margin-top: 10px;
          color: red;
          font-weight: bold;
          text-align: center;
        }
      `}</style>

      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />

        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} />

        <label>College</label>
        <input name="college" value={form.college} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
}
