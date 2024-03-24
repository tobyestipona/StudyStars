import { Link } from "react-router-dom";
// import Button from "./Button";

function PartnerProfile(){
  return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1>Study Stars</h1>
        <div>
          <h2>Name: Erika Pernis</h2>
          <h2>Grade: Freshman</h2>
          <h2>School: ECS</h2>
          <h2>Major: Electrical Engineering</h2>
        </div>
        {/* <div style={{marginTop: "20px"}}>
          <Link to="/Question1">
            <Button color="primary" onClick={() => console.log()}>
              Login
            </Button>
          </Link>
        </div> */}
      </div>
    );
}

export default PartnerProfile;