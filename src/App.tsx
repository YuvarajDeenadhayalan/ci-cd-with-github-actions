import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import ContactPage from './components/ContactPage';
import EnquiryForm from './components/EnquiryForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
      </Routes>
    </Router>
  );
};

export default App;