import React from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
    return (
      <>
      <div className="About">
        <h1 className="head">This is About page</h1>
      </div>
      <Button sx={buttonStyle}
      onClick={() => navigate("/")}>
      Redirect
      </Button>
    </>
    );
  }
  
export default About;

const buttonStyle = {
  color:"white",
  backgroundColor: "#630dcc",
  marginBottom:"30px",
  marginTop:"10px",
  fontWeight: "bold",
  fontSize:"12px",
}