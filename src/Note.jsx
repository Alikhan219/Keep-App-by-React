import React from "react"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';




const Note = () => {
    return (
        <>
    <div className="note">
        <h1>Title</h1>
        <br />
        <p className="p_wrap">ali khan my name is what are you doing now man</p>
        <button className="btn">
           <DeleteOutlineIcon className="deleteIcon"/>
           </button>
    </div>
        </>
    )
}
export default Note;