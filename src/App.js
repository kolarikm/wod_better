import React, { Component } from 'react';
import Note from './components/Note';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: '',
            noteList: []
        }

        this.updateText = this.updateText.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    updateText(text) {
        this.setState({ text: text.target.value });
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
            this.addNote(event.target.value);
        }
    }

    addNote() {
        console.log("hell");
        // Don't add empty notes
        if (this.state.text !== '') {
            let notes = this.state.noteList;
            notes.push(this.state.text);
            this.setState({ text: '' });
        }
    }

    removeNote(id) {
        let notes = this.state.noteList;
        notes.splice(id, 1);
        this.setState({ noteList: notes });
    }

    render() {

        let notes = this.state.noteList.map((val, key) => {
            return <Note key={key}
                         text={val}
                         delete={() => this.removeNote(key)}
                    />
        });

        return (
            <div className="App">
                <div className="header">
                    <h1>Better WOD</h1>
                </div>
                <div>{notes}</div>
                <input type="text"
                       className="form-control text-input"
                       value={this.state.text}
                       onChange={text => this.updateText(text)}
                       onKeyPress={this.handleKeyPress}
                />
                <div><button type="button" className="btn btn-primary" onClick={this.addNote}>+</button></div>
            </div>
        )
    }
}

export default App;