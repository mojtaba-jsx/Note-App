import React, { Component } from 'react'
import './NoteApp.css'
 class NoteApp extends Component {
  constructor(){
    super()

    this.state={
      colors:[
        "#ffff",
      ],
      notes:[],
      noteTitle:'',
      inputColor:'#ffff'
    }
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}

export default NoteApp
