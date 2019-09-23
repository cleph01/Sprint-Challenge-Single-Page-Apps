import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {

    const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getEpisodes = () => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          setEpisodes(response.data.results)
          console.log(response.data.results)
        })
        .catch(error => {
          console.error('Axios Call Error', error);
        });
    }

    getEpisodes();
  }, []);

  
  console.log(episodes)

  return (
    <section className="episode-list grid-view">
      
      {
        episodes.map(episode => (

          <EpisodeCard key={episode.id} episode={episode} />
        ))
      }
    </section>
  );

}
