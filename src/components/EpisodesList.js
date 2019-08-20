import React, { useEffect, useState } from "react";
import EpisodesCard from './EpisodesCard';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        console.log(response);
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      <Card.Group itemsPerRow={2}>
        {episodes.map((value, key) => {
          return (
            <EpisodesCard value={value} key={key} />
          )
        })}
      </Card.Group>
    </section>
  );
}
