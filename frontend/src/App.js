// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext'; // Ensure the path is correct
import Login from './Login';
import Book from './Book';
import Admin from './Admin';
import BookingHistory from './BookingHistory';
function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/book' element={<Book />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/booking-history' element={<BookingHistory />} />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
