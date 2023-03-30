import React from "react";
import {Button} from '@mui/material';

function Admin() {
    return(
        <>
        <div className="img_person">
            <img className="imag" src="https://icon-library.com/images/facebook-user-icon/facebook-user-icon-17.jpg" alt="img_person"></img>
        </div>
        <div className="">
            <h1>This is Admin Page</h1>
        </div>
        <Button sx={buttonLogoutStyle}>
            Logout
        </Button>
        </>

    );
}

export default Admin;

const buttonLogoutStyle = {
    color:"white",
    backgroundColor: "#630dcc",
    marginBottom:"30px",
    marginTop:"10px",
    fontWeight: "bold",
    fontSize:"12px",
}