import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

 const EpisodeCard = (props) => (
  <Card>
  
  <Card.Content>
    <Card.Header>{props.episode.name}</Card.Header>
    <Card.Meta>Aired: {props.episode.air_date}</Card.Meta>
  </Card.Content>
  <Card.Content extra>
    # of Characters: {props.episode.characters.length}
  </Card.Content>
</Card>
 )

export default EpisodeCard


