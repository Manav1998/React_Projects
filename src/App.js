import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

    let [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    })

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
       .then(response => {
            if(response) {
                setAdvice(response.data.slip.advice)
            }
       })
       .catch(err => console)
    }

  return (
    <div className='app'>
        <div className='card'>
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={fetchAdvice}>
                <span>Give me advice</span>
            </button>
        </div> 
    </div>
  )
}

export default App