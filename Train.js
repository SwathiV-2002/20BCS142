import React from 'react';

const Train = ({ train }) => {
  // You can now access the train object in the TrainDetails component

  return (
    <div>
      <h2>Train Details: {train.name}</h2>
      <p>Seat Availability: {train.seatAvailability}</p>
      <p>Price: ₹{train.price}</p>
      <p>Coach Type: {train.coachType}</p>
    </div>
  );
};

export default Train;
