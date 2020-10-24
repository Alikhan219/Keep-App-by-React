import React from "react"
import Note from "./Note"
const Div = () => {
    return (
        <>
            <div className="main_div" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <Note />
            </div>

        </>
    )
}

export default Div;
