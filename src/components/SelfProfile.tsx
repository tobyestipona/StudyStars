import { Link } from "react-router-dom";
import Button from "./Button";

function SelfProfile(){
  return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1>Study Stars</h1>
        <div>
          <h2>Name: Jaena Orozco</h2>
          <h2>Grade: Freshman</h2>
          <h2>School: ECS</h2>
          <h2>Major: Software Engineering</h2>
        </div>
        <div style={{marginTop: "20px"}}>
          <Link to="/PartnerProfile">
            <Button color="primary" onClick={() => console.log()}>
              Find out your Study Star!
            </Button>
          </Link>
        </div>
      </div>
    );
}

export default SelfProfile;