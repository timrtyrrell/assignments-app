import React, { Component } from 'react';
import Item from './Item'

class Assignments extends Component {

    render() {
        return this.props.assignments.map((assignment) => (
            <Item key={assignment.id} item={assignment} markDone={this.props.markDone}
            delAss={this.props.delAss}/>
        ));
    }
}


export default Assignments;
