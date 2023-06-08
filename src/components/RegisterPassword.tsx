import { useState } from 'react';

const RegisterPassword = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    login: '',
    password: '',
    URL: '',
    id: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    event.preventDefault();
    setFormData((prevData) => {
      ...prevData,
      [name]: value,
      id: Date.now
    })
  };
};

export default RegisterPassword;
