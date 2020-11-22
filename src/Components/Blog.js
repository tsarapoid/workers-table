import React, { Component } from "react"
import './Blog.css'
import data from './data'

class Table extends React.Component {
	constructor(props) {
		 super(props)
		 this.state = {
				people: data,
/*  				people: data.sort((a, b) => (a.family > b.family) ? 1
				: (a.family === b.family) ? ((a.name > b.name) ? 1 : -1) : -1 ),
 */				parameter: 'family',

 //				parameters: ['','',''],
				order: {name: 1, family: 1, role: 1},

//

				//			data.sort((a, b) => (a.name > b.name) ? 1 : -1)
		 }
	}

/* 	renderTableHeader() {
		 let header = Object.keys(this.state.people[0])
		 return header.map((key, index) => {
				return <th key={index}>{key.toUpperCase()}</th>
		 })
	} */

	renderTableData() {
		 return this.state.people.map((people, index) => {
				const { name, family, role } = people //destructuring
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
/* 	const song = e.target.getAttribute('data-item');
	console.log('We need to get the details for ', song);
 */
	//let target = event.target.getAttribute('data-item')
	//console.log(target)
	//console.log(this.state)
	
	let parameter = this.state.parameter
	let target = event.target.getAttribute('data-item')
	//let parameter = this.state.order[target]
	
	console.log(this.state.order)
/* 	console.log(parameter, 'prev', y)
	console.log(target, 'new', x) */

	this.setState({parameter: target})
	
	let y = this.state.order[parameter]
	let x = this.state.order[target]

	this.setState(prevState => ({
		order: {...prevState.order,
			[target]: prevState.order[target] * (-1)}
	}))

	//let target = this.state.parameter


	this.setState(prevState => ({
		...prevState.people.sort((a, b) => (a[target] > b[target]) ? x
		: (a[target] === b[target]) ? ((a[parameter] > b[parameter]) ? y : -y) : -x)
	}))
/* 
	list.sort((a, b) =>
	(a.first > b.first) ? 1 : (a.first === b.first) ? (
		((a.second > b.second) ? 1 : (b.second === b.second) ?
			((a.third > b.third) ? 1 : -1) : -1 ))	: -1 )
	 */
	

/* 	this.setState(prevState => ({
		...prevState.people.sort((a, b) => (a[target] > b[target]) ? 1
		: (a[target] === b[target]) ? ((a.family > b.family) ? 1 : -1) : -1)
	})) */

	//			data.sort((a, b) => (a.name > b.name) ? 1 : -1)

	//if this.state.order
	
//	this.setState(prevState => { return {...prevState.order[target]*-1}})

//this.setState({order: this.state.order[target]*(-1),})

/* let newOrder = this.state.order
newOrder[target] = newOrder[target] * (-1)
console.log(newOrder)*/

/* 
 
this.setState((state, target) => ({
  order[target]: state.order[target] * (-1)
}));
 */

/* this.setState(function(state) {
  return {
    order: state.order * (-1)
  };
}); */
 



	
	}
	

	render() {
		return (
			<div>
{/*		<h1 id='title'>React Dynamic Table</h1> */}
			<table id='people'>
				<tbody>
					<tr >
						<th onClick={this.tableHeader} data-item='name'>
							ИМЯ {this.state.order.name}</th>
						<th onClick={this.tableHeader} data-item='family'>
							ФАМИЛИЯ {this.state.order.family}</th>
						<th onClick={this.tableHeader} data-item='role'>
							ДОЛЖНОСТЬ {this.state.order.role}</th>
	{/*			{this.renderTableHeader()} */}
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