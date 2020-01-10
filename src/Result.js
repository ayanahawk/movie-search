import React from 'react'
import result from './Result'

function Results({result}) {
    return (
      <div className="result">
          <img src={result.Poster}/>
          
          <h3>{result.Title}</h3>

      </div>
    )
}

export default Results
