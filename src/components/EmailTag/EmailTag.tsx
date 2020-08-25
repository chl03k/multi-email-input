import React, { useState, useEffect } from 'react'
import shortid from 'shortid';

import { Tag } from './styles';
import error from '../../icons/error-circle.png';

export interface Props {
  handleClick: (email: string) => void;
  children: any;
}

const EmailTag = ({ children, handleClick }: Props) => {

  const [isValid, setIsValid] = useState(true);

  const onClickHandle = (event: any) => {
    handleClick(event)
  }

  const validateEmail = (email: any) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  useEffect(() => {
    setIsValid(validateEmail(children))
  }, [isValid])

  return (
    <Tag valid={isValid}  className="email-tag" key={shortid.generate()} onClick={() => onClickHandle(children)}>
      <span>{children} </span> {!isValid ? <img style={{ marginLeft: '5px' }} src={error} alt="error"></img> : null}
    </Tag>
  )
}


export default EmailTag