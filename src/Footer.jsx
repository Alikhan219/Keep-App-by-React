import React from "react"


const Footer = () => {
    const date= new Date().getFullYear()
    return (
        <>
         <footer >
             <p className= "footer"> copyright © {date} </p>
         </footer>
        </>
    )
}
export default Footer;