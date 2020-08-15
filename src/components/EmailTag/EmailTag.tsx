import React, { Component } from 'react'
import shortid from 'shortid';

import { Tag } from './styles';
import error from '../../icons/error-circle.png';


export interface Props {
  handleClick: (email: string) => void;
  children: any;
}

interface State {
  isValid: Boolean
}

export class EmailTag extends Component<Props, State> {

  state = {
    isValid: true
  }

  componentDidMount() {
    this.setState({ isValid: this.validateEmail(this.props.children) })
  }

  handleClick = (event: any) => {
    this.props.handleClick(event)
  }

  validateEmail = (email: any) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    const { isValid } = this.state;
    const { children } = this.props;
    return (
      <Tag valid={isValid} key={shortid.generate()} onClick={() => this.handleClick(children)}>
        <span>{children} </span> {!isValid ? <img style={{ marginLeft: '5px' }} src={error} alt="error"></img> : null}
      </Tag>
    )
  }
}
