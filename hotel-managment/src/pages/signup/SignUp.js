import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/slices/authSlice";
import { useNavigate } from 'react-router-dom';
import Loading from "../../components/loading/Loading";
import './SignupPage.css'; // Ensure to import the CSS for styling

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    gender: "",
  });

  const { email, password, name, phone, address, gender } = formData;

  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await dispatch(signup(formData)).unwrap();
      navigate('/login');
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Signup</h1>
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={address}
            onChange={handleChange}
            className="input-field"
            required
          />

          <div className="gender-section">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={gender === 'male'}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={gender === 'female'}
                required
              />
              Female
            </label>
          </div>

          <button type="submit" className="signup-button">Signup</button>
          {loading && <Loading />}
        </form>
        <button onClick={() => navigate('/login')} className="redirect-button">
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
