import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {


    const [note, setNote] = useState({
        title: '',
        content: ""
    })
     const inputEvent=(event)=>{
         const {name, value}= event.target;

         setNote((prevData)=>{
             return{
                 ...prevData, 
                 [name]:value,
             }
         })
     }
     const addEvent=()=>{
           props.passNote();
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
                    <Button onClick={addEvent} id="add-btn">
                        <AddIcon id="add-icon"></AddIcon>
                    </Button>
                </form>
            </div>
        </>
    )
}
export default CreateNote;
