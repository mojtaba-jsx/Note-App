import React, { Component } from "react";
import "./NoteApp.css";

import ColorBox from "./ColorBox/ColorBox";
import Note from "./Note/Note";
class NoteApp extends Component {
  constructor() {
    super();

    this.state = {
      colors: [
        { id: 1, color: "#15F5BA" },
        { id: 2, color: "#7F27FF" },
        { id: 3, color: "#0C2D57" },
        { id: 4, color: "#FFFC9B" },
        { id: 5, color: "#D24545" },
        { id: 6, color: "#92C7CF" },
        { id: 7, color: "#86B6F6" },
      ],
      notes: [],
      noteTitle: "",
      inputColor: "#ffff",
    };

    this.noteTitleHandler = this.noteTitleHandler.bind(this);
    this.inputColorHandler = this.inputColorHandler.bind(this);
    this.emptyNoteTitle = this.emptyNoteTitle.bind(this);
    this.addNote = this.addNote.bind(this);
    this.clearNotes = this.clearNotes.bind(this);
  }

  //! Methods
  noteTitleHandler(event) {
    this.setState({
      noteTitle: event.target.value,
    });
  }

  inputColorHandler(color) {
    this.setState({
      inputColor: color,
    });
  }

  emptyNoteTitle() {
    this.setState({
      noteTitle: "",
      inputColor: "#ffff",
    });
  }

  addNote() {
    let newNoteObject = {
      id: this.state.notes.length + 1,
      title: this.state.noteTitle,
      color: this.state.inputColor,
    };

    this.setState((prevState) => {
      return {
        notes: [...this.state.notes, newNoteObject],
        noteTitle:''
      };
    });
  }

  clearNotes(){
    this.setState({
      notes:[]
    })
  }

  render() {
    return (
      <div className="note-app">
        <header>
          <h1 className="header-title">Note App</h1>
        </header>

        <form className="note-input">
          <input
            type="text"
            placeholder="Enter Your Note ..."
            value={this.state.noteTitle}
            onChange={this.noteTitleHandler}
            style={{ backgroundColor: this.state.inputColor }}
          />
        </form>

        <div className="colors__box">
          <div className="colors__box__wrapper">
            {this.state.colors.map((color) => (
              <ColorBox
                {...color}
                key={color.id}
                onColor={this.inputColorHandler}
              />
            ))}
          </div>
        </div>

        <div className="note-app-btns">
          <button className="add-btn" onClick={this.addNote}>
            Add Note
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <button className="clear-input" onClick={this.emptyNoteTitle}>
            Clear Input
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button className="clear-notes" onClick={this.clearNotes}>
            Clear Notes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
        </div>

        <div className="notes">
          <div className="notes__wrapper">
            {this.state.notes.map((note) => (
              <Note {...note} key={note.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NoteApp;
