import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Note from "./Note"

const App=()=>{
return(
  <>
    <Header />
    <CreateNote />
    <div style={{display: "flex",flexDirection: "row"}}> 
    <Note />
    <Note />
    <Note />
    <Note />
    </div>
    <Footer />
  </>
)
}


export default App;