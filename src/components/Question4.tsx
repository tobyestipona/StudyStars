import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question4() {
  let items = ["Bear", "Giant Crab"];
  return (
    <div style={{ minHeight: "100vh", background: "#200657", textAlign: "center", paddingTop: "50px"  }}>
      <ListGroup
        items={items}
        heading="Would you rather fight a bear or a giant crab?"
        onSelectItem={handleSelectedItem}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/Question3">
          <Button color="primary" onClick={() => console.log()}>
            &lt;&lt; Back
          </Button>
        </Link>
        <Link to="/Question5">
          <Button color="primary" onClick={() => console.log()}>
            Next &gt;&gt;
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Question4;
