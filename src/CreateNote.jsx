import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {


    const [note, setNote] = useState({
        title: '',
        content: ""
    })
     const inputEvent=(event)=>{
         const value= event.target.value;
         setNote((prevData)=>{
             return{
                 ...prevData, 
             }
         })
     }
    return (
        <>
            <div className="main-note">
                <form>
                    <input
                         name="title"
                        type="text"
                        value={note.title}
                        onChange={inputEvent} placeholder="Title" autoComplete="off"
                    />
                    <textarea
                        name="content"
                        rows=""
                        column=""
                        value={note.title}
                        onChange={inputEvent} placeholder="Write a note..."></textarea>
                    <Button id="add-btn">
                        <AddIcon id="add-icon"></AddIcon>
                    </Button>
                </form>
            </div>
        </>
    )
}
export default CreateNote;
