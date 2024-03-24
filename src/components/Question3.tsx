import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question3() {
  let items = ["Blub blub", "Let's go fishing!"];
  return (
    <div style={{ minHeight: "100vh", background: "#200657", textAlign: "center", paddingTop: "50px"  }}>
      <ListGroup
        items={items}
        heading="It's a lake day! Would you rather go fishing or turn into a fish?"
        onSelectItem={handleSelectedItem}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/Question2">
          <Button color="primary" onClick={() => console.log()}>
            &lt;&lt; Back
          </Button>
        </Link>
        <Link to="/Question4">
          <Button color="primary" onClick={() => console.log()}>
            Next &gt;&gt;
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Question3;
