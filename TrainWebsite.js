import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Train from './Train';
import ReactDOM from 'react-dom';
import { match } from 'react-router-dom';


const TrainWebsite = () => {
const trains = [
{ name: 'Haley ', seatAvailability: 10, price: 500, coachType: 'A/C' },
{ name: 'Lukey', seatAvailability: 5, price: 750, coachType: 'Sleeper' },
{ name: 'Clarrys', seatAvailability: 2, price: 1000, coachType: 'A/C' },
{ name: 'Aloha', seatAvailability: 8, price: 1600, coachType: 'Sleeper' },
];

const trainName = match.params.trainName;

const train = trains.find((train) => train.name === trainName);

return (
<Router>
<div>
<h1>Train Details</h1>
<Switch>
<Route exact path="/">
<div className="train-container">
{trains.map((train, index) => (
<Train
key={index}
train={train}
name={train.name}
seatAvailability={train.seatAvailability}
price={train.price}
coachType={train.coachType}
/>
))}
</div>
</Route>
<Route path="/train/:trainName" render={(props) => <Train {...props} train={train} trainName={trainName} />} />
</Switch>
</div>
</Router>
);
};

ReactDOM.render(
<React.StrictMode>
<Router>
<TrainWebsite />
</Router>
</React.StrictMode>,
document.getElementById('root')
);

export default TrainWebsite;
