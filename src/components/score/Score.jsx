import React from 'react'
import {StyledScore} from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faUser } from '@fortawesome/free-solid-svg-icons' 

function Score(props){
    return (
        <StyledScore>
          <section>
            <FontAwesomeIcon icon={faUser} size="2x" />
            <h3>JOGADOR : </h3>
            <p>{props.playerPt}</p>
          </section>
          <section>
            <FontAwesomeIcon icon={faUser} size="2x"  />
            <h3>COMPUTADOR : </h3>
            <p>{props.computerPt}</p>
          </section>
        </StyledScore>
    )
}

export default Score