import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      <Card.Group itemsPerRow={2}>
        {characters.map((value, key) => {
          return (
            <CharacterCard value={value} key={key} />
          )
        })}
      </Card.Group>
    </section>
  );
}
