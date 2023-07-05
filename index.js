import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css';

const Train = ({ name, seatAvailability, price, coachType }) => {
  return (
    <div className="train">
      <h2>{name}</h2>
      <p>Seat Availability: {seatAvailability} seats</p>
      <p>Price: ₹{price}</p>
      <p>Coach Type: {coachType}</p>
    </div>
  );
};

const TrainDetails = ({ match }) => {
  const trainName = match.params.trainName;
  const train = {
    departureStation: 'Mumbai',
    arrivalStation: 'Delhi',
    travelTime: 12,
    seatingCapacity: 100,
    fares: [
      {
        price: 1000,
        class: 'First Class',
      },
      {
        price: 500,
        class: 'Second Class',
      },
    ],
  };

  return (
    <div>
      <h2>Train Details: {trainName}</h2>
      <h3>Departure Station: {train.departureStation}</h3>
      <h3>Arrival Station: {train.arrivalStation}</h3>
      <h3>Travel Time: {train.travelTime} hours</h3>
      <h3>Seating Capacity: {train.seatingCapacity}</h3>
      <h3>Fares:</h3>
      {train.fares.map((fare) => (
        <div key={fare.id}>
          <h4>Class: {fare.class}</h4>
          <h4>Price: ₹{fare.price}</h4>
        </div>
      ))}
      <Link to="/book-tickets">
        <button>Book Tickets</button>
      </Link>
    </div>
  );
};

const TrainWebsite = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Train} />
        <Route path="/train/:trainName" component={TrainDetails} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <TrainWebsite>
    </TrainWebsite>
  </React.StrictMode>,
  document.getElementById('root')
);
