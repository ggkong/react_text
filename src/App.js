import React, { Component } from 'react'
import Table from './Table'

class App extends Component {

	state = {
		characters : [
			{	
  				name: 'Charlie',
        		job: 'Janitor',
  			},
  			{
  				name: 'Mac',
        		job: 'Bouncer',
  			},
			],
	}

	removeCharacter = index =>{
		const { characters } = this.state

		this.setState ({
			// 定义两个参数
			characters : characters.filter((characterkongge,i) => {
				return i !== index
			}),
		})
	}

  render() {
  	const { characters } = this.state
  		

// 这个table的characterdata是早就定义好的，和table中的charaterdata是一一对应关系
    return (
      <div className="container">
      	<Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App