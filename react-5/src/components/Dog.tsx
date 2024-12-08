import React, { useEffect, useState } from 'react';

interface Dog {
  id: string;
  name: string;
  breed: string;
  image_url: string;
}

const DogList = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDogs()
      .then(setDogs)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h1>Dogs</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
            <img src={dog.image_url} alt={dog.name} style={{ width: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
