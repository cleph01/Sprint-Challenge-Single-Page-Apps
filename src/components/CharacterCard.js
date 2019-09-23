import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => (
  <Card>
    <Image src={props.character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.character.name}</Card.Header>
      <Card.Meta>{props.character.species} {props.character.status}</Card.Meta>
      <Card.Description>
        {props.character.location.name}
      </Card.Description>
      <Card.Description>
        {props.character.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to='https://google.com'>
        <Icon name='user' />
        Episodes
      </Link>
    </Card.Content>
  </Card>
)

export default CharacterCard



