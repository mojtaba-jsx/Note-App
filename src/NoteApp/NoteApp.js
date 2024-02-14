import React, { Component } from "react";
import "./NoteApp.css";

import ColorBox from "./ColorBox/ColorBox";
import Note from "./Note/Note";
class NoteApp extends Component {
  constructor() {
    super();

    this.state = {
      colors: [
        { id: 1, name: "#15F5BA" },
        { id: 2, name: "#7F27FF" },
        { id: 3, name: "#0C2D57" },
        { id: 4, name: "#FFFC9B" },
        { id: 5, name: "#D24545" },
        { id: 6, name: "#92C7CF" },
        { id: 7, name: "#86B6F6" },
      ],
      notes: [],
      noteTitle: "",
      inputColor: "#ffff",
    };


    this.noteTitleHandler =this.noteTitleHandler.bind(this)
    this.inputColorHandler =this.inputColorHandler.bind(this)
    this.emptyNoteTitle =this.emptyNoteTitle.bind(this)
  }

  //! Methods
  noteTitleHandler(event){
    this.setState({
      noteTitle:event.target.value
    })
  }

  inputColorHandler(color){
    this.setState({
      inputColor:color
    })
  }

  emptyNoteTitle(){
    this.setState({
      noteTitle:''
    })
  }



  render() {
    return (
      <div className="note-app">
        <header>
          <h1 className="header-title">Note App</h1>
        </header>

        <form className="note-input">
          <input type="text" placeholder="Enter Your Note ..." value={this.state.noteTitle} onChange={this.noteTitleHandler} style={{backgroundColor:this.state.inputColor}} />
        </form>

        <div className="colors__box">
          <div className="colors__box__wrapper">
            {this.state.colors.map((color) => (
              <ColorBox {...color} key={color.id} onColor={this.inputColorHandler} />
            ))}
          </div>
        </div>

        <div className="note-app-btns">
          <button className="add-btn">
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
        </div>

        <div className="notes">
          <div className="notes__wrapper">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
      </div>
    );
  }
}

export default NoteApp;
