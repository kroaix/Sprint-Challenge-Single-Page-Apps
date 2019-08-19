import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        console.log(response);
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log(error);
    })
  }, []);

  return (
    <section className="grid-view">
      <Card.Group itemsPerRow={2}>
        {locations.map((value, key) => {
          return (
            <LocationCard value={value} key={key} />
          )
        })}
      </Card.Group>
    </section>
  );
}
