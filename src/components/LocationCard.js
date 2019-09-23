import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

 const LocationCard = (props) => (
  <Card>
  
  <Card.Content>
    <Card.Header>{props.location.name}</Card.Header>
    <Card.Meta>{props.location.type} {props.location.dimension}</Card.Meta>
  </Card.Content>
  <Card.Content extra>
    {props.location.residents.length} residents
  </Card.Content>
</Card>
 )

export default LocationCard


