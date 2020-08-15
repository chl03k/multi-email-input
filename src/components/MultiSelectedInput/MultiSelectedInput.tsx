import React, { Component } from 'react';

import { AutoCompleteList } from '../AutoCompleteList/AutoComplete';
import { Input, Container } from './styles';
import { EmailTag } from '../EmailTag/EmailTag';

import shortid from 'shortid';

interface Props {
  options: string[],
}
interface State {
  currentInput: string;
  showAutoComplete: Boolean;
  showPlaceHolder: Boolean;
  alreadySelected: string[];
  suggestions: string[];
}

export default class MultiSelectInput extends Component<Props, State> {

  state = {
    suggestions: [],
    alreadySelected: [],
    currentInput: '',
    showPlaceHolder: true,
    showAutoComplete: false
  }

  onChange = (event: any) => {
    const { options } = this.props;
    const inputvalue = event.currentTarget.value;
    const suggestions = options.filter(
      options => options.toLowerCase().indexOf(inputvalue.toLowerCase()) > -1
    );

    this.setState({
      suggestions,
      currentInput: inputvalue
    });
  }

  onKeyDown = (event: any) => {
    const keyCode = event.key || event.keyCode;

    if (event.keyCode === 9) {
      event.preventDefault();
    }

    if (keyCode === 13 || keyCode === 'Enter' || keyCode === 'Tab' || keyCode === 9) {
      this.onSelectedSuggestion(this.state.currentInput)
    }

    if (keyCode === 'Escape' || keyCode === 'Esc' || keyCode === 27) {
      this.setState({ showAutoComplete: false, suggestions: [] });
    }
  }

  onSelectedSuggestion = (selection: string) => {
    const { alreadySelected = [] as string[] } = this.state;
    if (selection) {
      alreadySelected.push(selection)
      this.setState({ alreadySelected, suggestions: [], currentInput: '' });
    }
  }

  updateSelected = (selected: string) => {
    const { alreadySelected = [] as string[] } = this.state;
    const cleanSelection = alreadySelected.filter(
      option => selected !== option
    );

    if (cleanSelection.length === 0) {
      this.setState({ showPlaceHolder: true })
    }

    this.setState({ alreadySelected: cleanSelection });
  }

  render() {
    const { currentInput, suggestions = [], alreadySelected = [], showPlaceHolder } = this.state;
    return (
      <Container className="multi-select">
        {alreadySelected.map((email) => (
          <EmailTag key={shortid.generate()} handleClick={this.updateSelected}>
            {email}
          </EmailTag>
        ))}
        <div style={{ position: 'relative' }}>
          <Input
            className="email-input"
            ref="input"
            type="text"
            placeholder={showPlaceHolder ? "Enter recipients" : ''}
            onFocus={() => { this.setState({ showPlaceHolder: false }) }}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            value={currentInput}
          />
          {suggestions.length ? <AutoCompleteList suggestions={suggestions} onSelect={this.onSelectedSuggestion} /> : null}
        </div>
      </Container>
    )
  }
}
