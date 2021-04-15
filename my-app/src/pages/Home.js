import React from 'react';
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (
    <div>
    <Jumbotron backgroundImage="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?cs=srgb&dl=pexels-fauxels-3182765.jpg&fm=jpg">
        <h1>Employee Directory</h1>
        <h2>A tool for management</h2>
    </Jumbotron>
    </div>
  );
}

export default Home;