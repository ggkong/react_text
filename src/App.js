import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';

class App extends Component {
// 实现能够添加人物和职位的功能
	state = {
		characters : [],
	}

	handleSubmit = character => {
  		this.setState({ characters: [...this.state.characters, character] })
	}


	// 定义一个方法，用来删除

	removeCharacter = index =>{
		// 传输变量
		const { characters } = this.state

		this.setState ({
			// 定义两个参数，随便两个参数即可
			characters : characters.filter((characterkongge,i) => {
				return i !== index
			}),
		})
	}

  render() {
  	// 传输方式改为state
  	const { characters } = this.state
  		

// 这个table的characterdata是早就定义好的，和table中的charaterdata是一一对应关系
    return (
      <div className="container">
      	<h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App