// Write your Character component here
import React, {useState} from 'react'


const CharacterInfo = (props) => {
    
    return( 
        <div className='info-card'>
            <img src={props.result.image} alt={`${props.result.name}`}></img>
            <div className='card-text'>
                <h2>{props.result.name}</h2>
                <p>Species: {props.result.species}</p>
                <p>{props.result.status}</p>
            </div>
        </div>
        
    )
}

export default CharacterInfo