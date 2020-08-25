import React from 'react';
import { List, Container, FadeComponent, ListItem } from './styles';

export interface AutoCompleteProps {
  suggestions: string[];
  onSelect: any
}

export const AutoCompleteList = ({ suggestions, onSelect }: AutoCompleteProps) => {
  return (
    <Container>
      <List className="suggestions-list">
        {suggestions.map((suggestion, index) => {
          return (
            <ListItem key={suggestion} onClick={() => onSelect(suggestion)} >
              {suggestion}
            </ListItem>
          );
        })}
      </List>
      <FadeComponent />
    </Container>
  )
}
