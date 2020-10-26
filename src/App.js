import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Note from "./Note"

const App=()=>{
  const [addItem, setAddItem]= useState([])
  const addNote=(note)=>{
    setAddItem((prevData)=>{
     return [...prevData, note]
    });
    console.log(note)
    
  }

return(
  <>
    <Header />

    <div className='Div_2'>
    <CreateNote passNote={addNote}/>
    </div>
    <div className="main_div">
    <Note />
    </div>
    
    <Footer />
  </>
)
}


export default App;