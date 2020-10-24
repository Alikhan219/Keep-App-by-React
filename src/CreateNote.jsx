import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote =()=>{


    const [note, setNote]= useState({
        title:'',
        content:""
    })

    return(
        <>
           <div className="main-note">
      <form>
          <input type="text" placeholder="Title" autoComplete="off" />
          <textarea rows="" column="" placeholder="Write a note..."></textarea>
          <Button id="add-btn">
         <AddIcon id="add-icon"></AddIcon>
          </Button>
      </form>
           </div>
        </>
    )
}
export default CreateNote;
