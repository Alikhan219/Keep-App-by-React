import React from "react"
import Note from "./Note"
const Div = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <Note />
                <Note />
            </div>

        </>
    )
}

export default Div;
