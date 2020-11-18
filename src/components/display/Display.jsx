import React, { Component } from 'react'
import {StyledDisplay} from './style'

class Display extends Component{
    constructor(props){
        super(props)
        this.state = {
            Rock: false,
            Paper: false,
            Scissor: false 
        }
    }

    defaultDisplay(){
        this.setState({Rock: false })
        this.setState({Paper: false })
        this.setState({Scissor: false })
    }

    handleClick(option){
        this.defaultDisplay()
        if(option === 'rock' && this.props.user) return this.setState({Rock: true })
        if(option === 'paper' && this.props.user) return this.setState({Paper: true })
        if(option === 'scissor' && this.props.user) return this.setState({Scissor: true })
    }

    render (){
        return (
            <StyledDisplay>
                <img src='http://localhost:3000/assents/img/pedra.png'   className={this.state.Rock? 'active' : ''}    onClick={()=> this.handleClick('rock')}/>
                <img src='http://localhost:3000/assents/img/papel.png'   className={this.state.Paper? 'active' : ''}   onClick={()=> this.handleClick('paper')}/>
                <img src='http://localhost:3000/assents/img/tesoura.png' className={this.state.Scissor? 'active' : ''} onClick={()=> this.handleClick('scissor')}/>
            </StyledDisplay>
        )
    }
}

export default Display