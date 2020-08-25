import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MultiSelectInput from './components/MultiSelectedInput/MultiSelectedInput';

const API_URL = process.env.REACT_APP_API_URL;

const Container = styled.div`
  min-width: 400px;
  min-height: 50px;
  padding:  6px 12px;
  display: flex;
  align-items: center;
  background: #FDFDFD;
  border-radius: 8px;
  filter: drop-shadow(0px 16px 34px rgba(48, 53, 57, 0.05));
`

const App = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/emails`)
      .then((response) => response.json())
      .then((emails) => setState(emails))
  }, [])

  return (
    <Container>
      <MultiSelectInput options={state}></MultiSelectInput>
    </Container>
  )
}


export default App;