import React from 'react' 

import {GlobalStyle, Container } from './Globalstyle';

import Header from './components/cabecario/Header'
import Display from './components/display/Display'
import Score from './components/score/Score'

function App() {
  return (
    <Container className="App">
        <GlobalStyle />
        <Header />
        <Display user={true}  />
        <Score computerPt='-' playerPt='-'/>
        <Display user={false} />     
    </Container>
  );
}

export default App;
