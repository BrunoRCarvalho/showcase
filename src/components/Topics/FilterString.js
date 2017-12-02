import React, { Component } from 'react'

class FilterString extends Component {
  constructor() {
    super()

    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      namesResult: []
    }
  }

  handleChange (val) {
    this.setState( { userInput: val } )
  }

  handleFilter (userInput) {
    const { names } = this.state
    let result = []
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        result.push(names[i])
      }
    }
    this.setState({ namesResult: result })
  }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: { JSON.stringify(this.state.names, null, 10)}
        </span>
        <input className="inputLine" onChange={ (val) => this.handleChange(val.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.handleFilter(this.state.userInput) }>
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: { JSON.stringify(this.state.namesResult, null, 10)}
        </span>
      </div>
    )
  }
}

export default FilterString
