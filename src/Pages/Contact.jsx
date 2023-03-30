import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Contact">
        <h1 className="head">This is Contact page</h1>
      </div>
      <Button sx={buttonStyle} onClick={() => navigate("/")}>
        Redirect
      </Button>
    </>
  );
}

export default Contact;

const buttonStyle = {
  color:"white",
  backgroundColor: "#630dcc",
  marginBottom:"30px",
  marginTop:"10px",
  fontWeight: "bold",
  fontSize:"12px",
}