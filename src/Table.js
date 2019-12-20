import React ,{ Component } from 'react'

const TableHeader = () => {

  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterDatakong.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td> 
      <td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
      </td>
      </tr>

     
    )
  })

  return <tbody> {rows} </tbody>
}

  

// 一个类组件必须包含render()，并且return只能返回一个父元素。
// 如果在react中需要定义class组件，就必须要继承React.Component
class Table extends Component {
     render() {
      // 传输到这里
      const { characterData, removeCharacter } = this.props

      return (
      <table>
        <TableHeader />

        <TableBody characterDatakong = {characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }
}
    
export default Table;