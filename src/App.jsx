import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import CardMovie from './cardMovie'
import searchIcon from './buscador.svg'

const API_URL = 'http://www.omdbapi.com?apikey=d785ea4a'

const App = () => {
    
    const [movies, setMovies] = useState([])
    const [ searchParameter, setSearchParameter ] = useState('')
    const buscadorCine = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    }
    useEffect(()=> {
        buscadorCine('rocky')
    }, [])
  return (
    <div className='app'>
        <h1> Cine Colombia </h1>
        <div className='busqueda'> 
            <input
                placeholder='Buscador de peliculas'
                value= {searchParameter}
                onChange = {(e)=>setSearchParameter(e.target.value)}
            />
            <img
                src= {searchIcon}
                alt = 'Buscar'
                onClick={()=>buscadorCine(searchParameter)}
            />
        </div>   

        {movies.length  > 0 ? 
        movies.map((movie)=>  
            <div className='contenedor'>
                <CardMovie movie1 = {movie}></CardMovie>
            </div>
            
        ) : <div className='empty'>
                <h2> There's not movies </h2>
            </div>}
</div>
)
}

export default App;