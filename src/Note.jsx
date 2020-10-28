import React from "react"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./index.css"

const Note = (props) => {
    return (
        <>

            <div className="note">
               
                <h1 className="title">{props.title}</h1>
                <br />
                <p className="p_wrap">{props.content}</p>

                <button className="btn">
                    <DeleteOutlineIcon className="deleteIcon" />
                </button>

            </div>

        </>
    )
}
export default Note;