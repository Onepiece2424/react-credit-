import React from 'react'

import CardoInfo from './CardoInfo'

// function
import showResults from "./func/showResults";

const ReactCredit = () => {
  return (
    <>
      <CardoInfo onSubmit={showResults} />
    </>
  )
}

export default ReactCredit;
