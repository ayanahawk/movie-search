import React from 'react'

function Result({result}) {
    return (
      <div className="results">
          <img src={result.Poster}/>
          
          <h3>{result.Title}</h3>

      </div>
    )
}

export default Result
