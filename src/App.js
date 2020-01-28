import React, { Component } from 'react';
import './App.css';
import Assignments from './components/Assignments'
import Header from './components/layout/Header'
import Add from './components/Add'
import uuid from 'uuid'

class App extends Component {
  state = {
    assignments: []
  }

  markDone = (id) => {
    this.setState({ assignments: this.state.assignments.map(assignment => {
      if(assignment.id === id) {
        assignment.done = !assignment.done
      }
      return assignment;
    })});
  }

  delAss = (id) => {
    this.setState({ assignments: [...this.state.assignments.filter(assignment => assignment.id
    !== id)] });
  }

  add = (title) => {
    const newAssignment = {
      id: uuid.v4(),
      title: title,
      done: false
    }
    this.setState({ assignments: [...this.state.assignments, newAssignment]})
  }

  delAll = (e) => { 
    this.setState({ assignments: [] })
  }

  crossAll = (e) => {
    this.setState({ assignments: [...this.state.assignments.filter(assignment =>
    assignment.done = true)] })
  }

  render() {
    return (
      <div className="App">

        <Header />
        <div className="container">
          
          <Assignments assignments={this.state.assignments} 
          markDone={this.markDone} delAss={this.delAss}/>
          {"  "}
          <button onClick={this.delAll} style={clearStyle}>clear assignments</button>
          <button onClick={this.crossAll} style={clearStyle}>all complete</button>
          <Add add={this.add} />
          

          

        </div>
      </div>
    );
  }
}

const clearStyle = {
  flex : '1',
  display: 'inline-block',
  border: 'none',
  color: 'gray',
  padding: '6px',
  cursor: 'pointer',
  float: 'right'
}

export default App;
