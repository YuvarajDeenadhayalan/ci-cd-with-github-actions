import React from 'react';

const ContactPage = () => {
  const contactInfo = {
    address: "123 Main St, City",
    email: "contact@example.com",
    phone: "+123-456-7890",
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <div>
        <h2>Contact Information</h2>
        <p>Address: {contactInfo.address}</p>
        <p>Email: {contactInfo.email}</p>
        <p>Phone: {contactInfo.phone}</p>
      </div>
    </div>
  );
};

export default ContactPage;