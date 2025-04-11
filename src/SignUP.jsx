// SignUpForm.jsx
import { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showSubmittedData, setShowSubmittedData] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10-15 digits';
    }
    
    // if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(formData.password)) {
    //   newErrors.password = 'Password must be 8+ chars with uppercase, lowercase, and number';
    // }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      });
      setShowSubmittedData(!showSubmittedData); // Toggle dropdown
      
      // Clear password fields
      setFormData({
        ...formData,
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </form>

      {/* Dropdown to show submitted data */}
      {submittedData && (
        <div className="mt-4 bg-white rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => setShowSubmittedData(!showSubmittedData)}
            className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-left font-medium flex justify-between items-center"
          >
            <span>View Submitted Data</span>
            <svg
              className={`w-5 h-5 transition-transform ${showSubmittedData ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showSubmittedData && (
            <div className="p-4 border-t">
              <h3 className="font-bold mb-2">Your Information:</h3>
              <div className="space-y-2">
                <p><span className="font-semibold">Name:</span> {submittedData.firstName} {submittedData.lastName}</p>
                <p><span className="font-semibold">Email:</span> {submittedData.email}</p>
                <p><span className="font-semibold">Phone:</span> {submittedData.phone}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignUpForm;