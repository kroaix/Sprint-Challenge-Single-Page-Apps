import React from "react";
import { Card, Label, Icon } from 'semantic-ui-react';

export default function EpisodesCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          (<span><em>{props.value.episode}</em></span>) <span>{props.value.name}</span>
        </Card.Header>
        <Card.Meta>
          <p>{props.value.air_date}</p>
        </Card.Meta>
      </Card.Content> 
      <Card.Content extra>
        <Label attached="bottom right"><Icon name="user" />{props.value.characters.length} Characters</Label>
      </Card.Content>
    </Card>
  );
}