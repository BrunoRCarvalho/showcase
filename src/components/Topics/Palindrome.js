import React, { Component } from 'react'

class Palindrome extends Component {
  constructor () {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange (event) {
    this.setState({ userInput: event.target.value })
  }

  handleResult (userInput) {
    let name = this.state.userInput
    let reverse = name.split('').reverse().join('')
    if (name === reverse) {
      this.setState({palindrome: 'true'})
    } else {
      this.setState({palindrome: 'false'})
    }
  }

  render () {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>

        <input className='inputLine' onChange={(event) => this.handleChange(event)} />

        <button className='confirmationButton' onClick={() => { this.handleResult(this.state.userInput) }}>Check</button>

        <span className='resultsBox'>Palindrome: { this.state.palindrome }</span>
      </div>
    )
  }
}

export default Palindrome
