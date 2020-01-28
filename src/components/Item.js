import React, { Component } from 'react'

export class Item extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.item.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.item;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markDone.bind
                        (this, id)} /> {'  '}
                    { title }
                    <button onClick={this.props.delAss.bind(this, id)} style={buttonStyle}>delete</button>
                </p>
            </div>
        )
    }
}


const buttonStyle = {
    background: '#8b0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}

export default Item