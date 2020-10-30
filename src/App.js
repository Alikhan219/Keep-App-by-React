import React, { useState } from "react"
import Header from "./Header"
import CreateNote from "./CreateNote"
import Note from "./Note"
import { FullscreenExitRounded } from "@material-ui/icons"

const App = () => {
  const [addItem, setAddItem] = useState([])
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note]
    });
    console.log(note)

  }
  const onDelete=()=>{}

  return (
    <>
      <Header />

      <div className='Div_2'>
        <CreateNote passNote={addNote} />
      </div>

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
             deletItem={onDelete}
            
          />
        )
      })}
      
    </>
  )
}


export default App;