import React, { useEffect, useContext, useState } from 'react'; // Import useState
import './Book.css';
import { BookingContext } from './context/BookingContext';
import car from "./assets/car.png";
import Navbar from "./Navbar";

const Book = () => {
  const { name, setName, staffId, setStaffId, source, setSource, destination, setDestination, reason, setReason, setBookings } = useContext(BookingContext);
  
  // State for notification
  const [notification, setNotification] = useState({ message: '', visible: false });

  const fetchBookings = async () => {
    const response = await fetch('http://localhost:5000/api/bookings');
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }); // Added dependency array to avoid infinite loop

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = { name, staffId, source, destination, reason };

    await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    },[]);

    // Clear form fields after submission
    setName('');
    setStaffId('');
    setSource('');
    setDestination('');
    setReason('');

    // Refetch bookings
    fetchBookings();

    // Set notification message and visibility
    setNotification({ message: 'Booking submitted successfully!', visible: true });

    // Hide notification after 4 seconds
    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 4000);
  };

  return (
    <>
      <Navbar/>
      <div className="wrapper">
        <div className="container">
          <div className="section-1">
            <div className="one">
              <div className="common">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" required />
              </div>
              
              <div className="common">
                <label htmlFor="staffid">Staff ID</label>
                <input type="text" id="staffid" name="staffid" value={staffId} onChange={(e) => setStaffId(e.target.value)} placeholder="Enter your ID" required />
              </div>
              
              <div className="common checkbox">
                <label className="important">Important</label>
                <input type="checkbox" id="important" name="important" />
              </div>
            </div>

            <div className="two">
              <div className="common">
                <label htmlFor="source">Source Place</label>
                <select id="source" name="source" value={source} onChange={(e) => setSource(e.target.value)} required>
                <option value="Gate - A">Gate - A</option>
                            <option value="Gate - B">Gate - B</option>
                            <option value="Gate - C">Gate - C</option>
                            <option value="Gate - D">Gate - D</option>
                            <option value="MAIN PARKING">MAIN PARKING</option>
                            <option value="PARKING (GROUND SIDE)">PARKING (GROUND SIDE)</option>
                            <option value="RESEARCH PARK">RESEARCH PARK</option>
                            <option value="AS BLOCK (FRONT)">AS BLOCK (FRONT)</option>
                            <option value="AS BLOCK (MID)">AS BLOCK (MID)</option>
                            <option value="AS BLOCK (END)">AS BLOCK (END)</option>
                            <option value="IB BLOCK (FRONT)">IB BLOCK (FRONT)</option>
                            <option value="IB BLOCK (MID)">IB BLOCK (MID)</option>
                            <option value="IB BLOCK (END)">IB BLOCK (END)</option>
                            <option value="SF BLOCK">SF BLOCK</option>
                            <option value="MECHANICAL SCIENCE">MECHANICAL SCIENCE</option>
                            <option value="BOYS HOSTEL">BOYS HOSTEL</option>
                            <option value="TENNIS COURT">TENNIS COURT</option>
                            <option value="PEARL GUEST HOUSE">PEARL GUEST HOUSE</option>
                            <option value="CAFETARIA">CAFETARIA</option>
                            <option value="LEARNING CENTER">LEARNING CENTER</option>
                            <option value="GIRLS HOSTEL">GIRLS HOSTEL</option>
                            <option value="GROUND">GROUND</option>
                            <option value="INDOOR BADMITON">INDOOR BADMITON</option>
                            <option value="STAFF QUATERS">STAFF QUATERS</option>
                </select>
              </div>

              <div className="common">
                <label htmlFor="destination">Destination Place</label>
                <select id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required>
                <option value="Gate - A">Gate - A</option>
                            <option value="Gate - B">Gate - B</option>
                            <option value="Gate - C">Gate - C</option>
                            <option value="Gate - D">Gate - D</option>
                            <option value="MAIN PARKING">MAIN PARKING</option>
                            <option value="PARKING (GROUND SIDE)">PARKING (GROUND SIDE)</option>
                            <option value="RESEARCH PARK">RESEARCH PARK</option>
                            <option value="AS BLOCK (FRONT)">AS BLOCK (FRONT)</option>
                            <option value="AS BLOCK (MID)">AS BLOCK (MID)</option>
                            <option value="AS BLOCK (END)">AS BLOCK (END)</option>
                            <option value="IB BLOCK (FRONT)">IB BLOCK (FRONT)</option>
                            <option value="IB BLOCK (MID)">IB BLOCK (MID)</option>
                            <option value="IB BLOCK (END)">IB BLOCK (END)</option>
                            <option value="SF BLOCK">SF BLOCK</option>
                            <option value="MECHANICAL SCIENCE">MECHANICAL SCIENCE</option>
                            <option value="BOYS HOSTEL">BOYS HOSTEL</option>
                            <option value="TENNIS COURT">TENNIS COURT</option>
                            <option value="PEARL GUEST HOUSE">PEARL GUEST HOUSE</option>
                            <option value="CAFETARIA">CAFETARIA</option>
                            <option value="LEARNING CENTER">LEARNING CENTER</option>
                            <option value="GIRLS HOSTEL">GIRLS HOSTEL</option>
                            <option value="GROUND">GROUND</option>
                            <option value="INDOOR BADMITON">INDOOR BADMITON</option>
                            <option value="STAFF QUATERS">STAFF QUATERS</option>
                </select>
              </div>

              <div className="common">
                <label htmlFor="reason">Reason</label>
                <input type="text" id="reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Enter reason for booking" required />
              </div>
            </div>   
          </div>

          <div className="section-2">
            <div className="common">
              <input type="submit" className="submit" value="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>

        <div className="instruction">
          <div>
            <img src={car} alt="not found" className="instruction-image" />
          </div>
          <div className="rules">
            <h2>Instructions</h2>
            <p>&#8658; Fill the details for creating a new request</p>
            <p>&#8658; Check the box in case of an important or emergency situation</p>
            <p>&#8658; Once you fill this form, your request will be added and after a few minutes, you’ll receive the response</p>
          </div>
        </div>

        {/* Notification for successful submission */}
        {notification.visible && (
         <div className="notification-container">
            <div className="notification">
                {notification.message}
            </div>
        </div>

        )}
      </div> 
    </>
  );
};

export default Book;
