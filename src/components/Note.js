import React, { Component } from 'react'
import '../App.css';

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: true
        }

        this.click = this.click.bind(this);
    }

    click() {
        this.setState({ active: !(this.state.active) });
    }

    render() {
        let status = this.state.active ? 'enabled' : 'disabled';
        let style = `note ${status}`;
        
        return (
            <div className={style} onClick={this.click}>
                {this.props.text}
                <span className="removeBtn" onClick={this.props.delete}>x</span>
            </div>
        ); 
    }
}

export default Note;