import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question2() {
  let items = ["Invisibility", "Super Stength"];
  return (
    <div style={{ minHeight: "100vh", background: "#200657", textAlign: "center", paddingTop: "50px" }}>
      <ListGroup
        items={items}
        heading="Would you rather have invisibility or super strength?"
        onSelectItem={handleSelectedItem}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/Question1">
          <Button color="primary" onClick={() => console.log()}>
            &lt;&lt; Back
          </Button>
        </Link>
        <Link to="/Question3">
          <Button color="primary" onClick={() => console.log()}>
            Next &gt;&gt;
          </Button>
        </Link>
      </div>
    </div> 
  );
}

export default Question2;
