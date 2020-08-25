import React, { useState, useEffect } from 'react'
import shortid from 'shortid';

import { Tag } from './styles';
import error from '../../icons/error-circle.png';

export interface Props {
  handleClick: (email: string) => void;
}

const EmailTag: React.FC<Props> = (props) => {

  const [isValid, setIsValid] = useState(true);

  const onClickHandle = (event: any) => {
    props.handleClick(event)
  }

  const validateEmail = (email: any) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  useEffect(() => {
    setIsValid(validateEmail(props.children))
  }, [props.children])

  return (
    <Tag valid={isValid}  className="email-tag" key={shortid.generate()} onClick={() => onClickHandle(props.children)}>
      <span>{props.children} </span> {!isValid ? <img style={{ marginLeft: '5px' }} src={error} alt="error"></img> : null}
    </Tag>
  )
}


export default EmailTag