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
        let style = this.state.active ? 'enabled' : 'disabled';
        return (
            <div className="note">
                <div className={style} onClick={this.click}>
                    {this.props.text}
                    <span className="removeBtn" onClick={this.props.delete}>x</span>
                </div>
            </div>
        ); 
    }
}

export default Note;