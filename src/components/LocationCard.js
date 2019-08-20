import React from "react";
import { Card, Label } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <p>{props.value.name}</p>
        </Card.Header>
        <Card.Description>
          <span>{props.value.type}</span> - <span>{props.value.dimension}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label attached="bottom right">{props.value.residents.length} Resident(s)</Label>
      </Card.Content>
    
    </Card>
  );
}
