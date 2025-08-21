import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
  });

  const [errors, setErrors] = useState({});
  const [apiErrors, setApiErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateFrontend = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.phone.match(phoneRegex)) {
      newErrors.phone = 'Phone must be a 10-digit number';
    }

    if (parseInt(formData.age) < 18 || parseInt(formData.age) > 100 || !formData.age) {
      newErrors.age = 'Age must be between 18 and 100';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrors({});
    setApiErrors({});

    const frontendErrors = validateFrontend();

    if (Object.keys(frontendErrors).length > 0) {
      setErrors(frontendErrors);
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/contacts', formData);
      setSuccessMessage('Contact added successfully!');
      setFormData({ name: '', email: '', phone: '', age: '' });
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        setApiErrors(err.response.data);
      } else {
        console.error('Unexpected error:', err);
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="card shadow contact-form-card">
      <div className="card-body">
        <h2 className="card-title mb-4 form-heading">Add New Contact</h2>

        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${apiErrors.name ? 'is-invalid' : ''}`}
              id='name-input'
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
            {apiErrors.name && <div className="invalid-feedback" id='name-error'>{apiErrors.name}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"

              className={`form-control ${apiErrors.email ? 'is-invalid' : ''}`}
              id='email-input'
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
            {apiErrors.email && <div className="invalid-feedback" id='email-error'>{apiErrors.email}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              id='phone-input'
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              minLength={10}
              maxLength={10}

            />
            {errors.phone && <div className="invalid-feedback" id='phone-error'>{errors.phone}</div>}
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className={`form-control ${errors.age ? 'is-invalid' : ''}`}
              id='age-input'
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
              min={18}
              max={100}

            />
            {errors.age && <div className="invalid-feedback" id='age-error'>{errors.age}</div>}
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              id='submit-btn'
            >
              Submit
            </button>
            <button
              type="button"
              id='cancel-btn'
              className="mt-3 btn btn-secondary cancel-btn bg-danger"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
