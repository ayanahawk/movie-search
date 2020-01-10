import React, { useState } from 'react'
import Search from "./Search.js"
import Results from "./Results"
import axios from 'axios'

function App() {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}

    });

    const apiurl = 'http://www.omdbapi.com/?apikey=f2b239c7';
   
    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiurl + "&s=" + state.s).then(({ data }) => {
                let results=data.Search;

               setState(prevState=>{
                   return{...prevState, results:results }
               })
            }).catch((err) => {
                console.log(err)
            })

        }
    }

    const handleInput = (e) => {
        let s = e.target.value;

        setState(prevState => {
            return { ...prevState, s: s }
        });

        console.log(state.s)
    }



    return (
      
            <header>
                <h1>Movie Database</h1>
                <main>
                    <Search handleInput={handleInput} search={search} />
                    <Results results={state.results}/>
                </main>
            </header>
    )
}

export default App;