import React, { Component } from "react"
import './Blog.css'
import data from './data'

class Table extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        people: data,
/*      people: data.sort((a, b) => (a.family > b.family) ? 1
        : (a.family === b.family) ? ((a.name > b.name) ? 1 : -1) : -1 ),*/
        parameter: '',
        parameters: ['','',''],
//      parameters: ['name','family','role'],
        order: {name: 1, family: 1, role: 1},
      }
}
  
/*   renderTableHeader() {
     let header = Object.keys(this.state.people[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }
*/

  renderTableData() {
     return this.state.people.map((people, index) => {
        const { name, family, role } = people
        return (
           <tr key={index}>
              <td>{name}</td>
              <td>{family}</td>
              <td>{role}</td>
           </tr>
        )
     })
  }

  
  tableHeader = (event) => {

  let parameter = this.state.parameter
  let target = event.target.getAttribute('data-item')

  let parameters = this.state.parameters

  if (parameters[2] !== target) {
    parameters = this.state.parameters.slice(1).concat(target)
    this.setState({
        parameters: parameters
      })
/*  this.setState(prevState => ({
        parameters: [...prevState.parameters.slice(1), target]
      }))
*/
    }
    this.setState({parameter: target})


    let order = this.state.order
    order[target] = order[target] * (-1)

    this.setState({order: order})
     
    
/* 
  this.state.parameters.
  [target]: prevState.order[target] * (-1)


  this.setState(prevState => ({
    order: {...prevState.order,
      [target]: prevState.order[target] * (-1)}
  }))
 */


/*   if (parameter !== '') {
    this.setState(prevState => ({
      order: {...prevState.order,
        [target]: prevState.order[target] * (-1)}
    }))
  } */
/*  
  let x = this.state.order[target]
  let y = this.state.order[parameter]
 
  this.setState(prevState => ({
    ...prevState.people.sort((a, b) => (a[target] > b[target]) ? x
    : (a[target] === b[target]) ? ((a[parameter] > b[parameter]) ? y : -y) : -x)
  }))
  console.log(target)
  console.log(parameters)
 */
  let first = parameters[2]
  let second = parameters[1]
  let third = parameters[0]

  let xx = this.state.order[first]
  let yy = this.state.order[second]
  let zz = this.state.order[third]

  this.setState(prevState => ({
    ...prevState.people.sort((a, b) =>
    (a[first] > b[first]) ? xx : (a[first] === b[first]) ? (
      ((a[second] > b[second]) ? yy : (a[second] === b[second]) ?
        ((a[third] > b[third]) ? zz : -zz) : -yy ))  : -xx )
    }))

  console.log(target)
  console.log(parameters)


/* 
  this.setState(prevState => ({
    ...prevState.people.sort((a, b) =>
    (a.first > b.first) ? 1 : (a.first === b.first) ? (
      ((a.second > b.second) ? 1 : (a.second === b.second) ?
        ((a.third > b.third) ? 1 : -1) : -1 ))  : -1 )
    }))
 */
  }
  

  render() {
    return (
      <div>
  {/* <h1 id='title'>React Dynamic Table</h1> */}
      <table id='people'>
        <tbody>
          <tr >
            <th onClick={this.tableHeader} data-item='name'>
              ИМЯ  {(this.state.order.name === 1) ? '▼'
              : (this.state.order.name === -1) ? '▲' : ''}
              {/* {this.state.order.name} */}
            </th>
            <th onClick={this.tableHeader} data-item='family'>
              ФАМИЛИЯ  {(this.state.order.family === 1) ? '▼'
              : (this.state.order.family === -1) ? '▲' : ''}
              {/* {this.state.order.family} */}
            </th>
            <th onClick={this.tableHeader} data-item='role'>
              ДОЛЖНОСТЬ  {(this.state.order.role === 1) ? '▼'
              : (this.state.order.role === -1) ? '▲' : ''}
            {/* {this.state.parameters} */}
            </th>
            {/* {this.renderTableHeader()} */}
          </tr>
            {this.renderTableData()}
          </tbody>
      </table>
      </div>
     )
  }
}


class Stuff extends Component {
  render() {
    return (
 
<Table/>

    );
  }
}

export default Stuff;