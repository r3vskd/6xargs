import React, { useState } from 'react';
import styles from './BusinessContactForm.module.css';

const BusinessContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    country: '',
    companyType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Business Contact Form</h3>

        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter company name"
          required
        />

        <label htmlFor="companyEmail">Company Email</label>
        <input
          type="email"
          id="companyEmail"
          name="companyEmail"
          value={formData.companyEmail}
          onChange={handleChange}
          placeholder="Enter company email"
          required
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter country"
          required
        />

        <label htmlFor="companyType">Company Type</label>
        <select
          id="companyType"
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
          required
        >
          <option value="">Select company type</option>
          <option value="opc1">Option 1</option>
          <option value="opc2">Option 2</option>
          <option value="opc3">Option 3</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessContactForm;
