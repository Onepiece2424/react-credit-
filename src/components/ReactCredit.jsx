import React from 'react'

import CardoInfo from './CardoInfo'

// function
import showResults from "./func/showResults";

const ReactCredit = () => {
  const greeting = 'Welcome to the world of React.js!';

  return (
    <>
      <CardoInfo onSubmit={showResults} text={greeting} />
    </>
  )
}

export default ReactCredit;
