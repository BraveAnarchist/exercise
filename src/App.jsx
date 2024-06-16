// src/App.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f8b4e0dc5dmsh37605f28de3c926p1f5db5jsn194918acab19',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(exercises)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        {exercises.map((exercise, index) => (
          <Section
            key={index}
            title={exercise.name}
            content={`Equipment: ${exercise.equipment}, Target: ${exercise.target}, Body Part: ${exercise.bodyPart}`}
            url={exercise.gifUrl}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
