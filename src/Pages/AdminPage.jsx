import { useNavigate } from "react-router-dom";
import tired from "../asset/tired.png"
function AdminPage() {
    const navigate = useNavigate();
    return (
        <>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
            <h1 style={{
                margin: "10px auto",
                display: "flex",
            }}>This is Admin Page</h1>
            <button style={{
                margin: "5px auto",
                display: "flex",
                backgroundImage: "linear-gradient(to right, #3acadf, #651fff 95%)",
                color: "white",
                padding: "10px ",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
                fontSize: "13px",
                width: "6%",
                alignItems: "center",
                justifyContent: "center",
            }} onClick={() => navigate("/")}>Log out</button>
        </>
    );
  }
  
  export default AdminPage;