import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <Card>
    <Image src={props.value.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <p>{props.value.name}</p>
        </Card.Header>
        <Card.Meta>
          <span>{props.value.species}</span>(<span>{props.value.status}</span>)
        </Card.Meta>
        <Card.Description>
          <p>Location: {props.value.location.name}<br />
          Origin: {props.value.origin.name}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={props.value.episodes}>
          <Icon name="user" />
          Episodes 
        </a>
      </Card.Content>
    </Card>
  );
}