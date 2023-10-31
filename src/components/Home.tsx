import React from 'react';

const Home = () => {
  const nurseryDetails = "Welcome to Our Nursery!";
  const staffDetails = "Meet our dedicated staff members.";

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h2>Nursery Details</h2>
        <p>{nurseryDetails}</p>
      </div>
      <div>
        <h2>Staff Details</h2>
        <p>{staffDetails}</p>
      </div>
    </div>
  );
};

export default Home;