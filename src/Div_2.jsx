import React from "react"
import CreateNote from "./CreateNote"
const Div_2 = () => {
    const addNote=()=>{
          alert('I am clicked')
    }
        return (
        <>
            <div className="Div_2">
                <CreateNote
                    passNote={addNote} />
            </div>
        </>
    )
}
export default Div_2;