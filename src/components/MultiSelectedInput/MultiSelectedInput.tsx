import React, { useState, useRef } from 'react';

import { AutoCompleteList } from '../AutoCompleteList/AutoComplete';
import { Container } from './styles';
import Input from '../Input/Input';
import EmailTag from '../EmailTag/EmailTag';

import shortid from 'shortid';

interface Props {
  options: string[],
}
interface State {
  resetValue: Boolean,
  alreadySelected: string[];
  suggestions: string[];
}

const MultiSelectInput = ({ options }: Props) => {

  const [state, setState] = useState<State>({
    suggestions: [],
    resetValue: false,
    alreadySelected: []
  });

  const { resetValue, suggestions = [], alreadySelected = [] } = state;

  const onChange = (inputvalue: string) => {
    const suggestions = options.filter(
      options => options.toLowerCase().indexOf(inputvalue.toLowerCase()) > -1
    );
    setState((prevState: State) => ({ ...prevState, suggestions }));
  }

  const onSelectedSuggestion = (selection: string) => {
    const { alreadySelected = [] as string[] } = state;
    if (selection) {
      alreadySelected.push(selection)
      setState((prevState: State) =>
        ({ ...prevState, alreadySelected, suggestions: [], resetValue: !prevState.resetValue })
      );
    }
  }

  const onKeyDown = (keyCode: string | number, InputValue: string) => {
    if (keyCode === 13 || keyCode === 'Enter' || keyCode === 'Tab' || keyCode === 9) {
      onSelectedSuggestion(InputValue)
    }

    if (keyCode === 'Escape' || keyCode === 'Esc' || keyCode === 27) {
      setState((prevState: State) =>
        ({ ...prevState, suggestions: [], resetValue: !prevState.resetValue })
      );
    }
  }

  const updateSelected = (selected: string) => {
    const { alreadySelected = [] as string[] } = state;
    const cleanSelection = alreadySelected.filter(
      option => selected !== option
    );

    if (cleanSelection.length === 0) {
      setState((prevState: State) => ({ ...prevState, showPlaceHolder: true }))
    }

    setState((prevState: State) => ({ ...prevState, alreadySelected: cleanSelection }));
  }

  return (
    <Container className="multi-select">
      {alreadySelected.map((email) => (
        <EmailTag key={shortid.generate()} handleClick={updateSelected}>
          {email}
        </EmailTag>
      ))}
      <div style={{ position: 'relative' }}>
        <Input onChange={onChange} onKeyDown={onKeyDown} resetValue={resetValue} />
        {suggestions.length ? <AutoCompleteList suggestions={suggestions} onSelect={onSelectedSuggestion} /> : null}
      </div>
    </Container>
  )
}


export default MultiSelectInput;