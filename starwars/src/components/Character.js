// Write your Character component here
import React, {useState} from 'react'


const CharacterInfo = (props) => {
    
    return( 
        <div className='info-card'>
            <img src={props.result.image} alt={`${props.result.name}`}></img>
        </div>
    )
}

export default CharacterInfo