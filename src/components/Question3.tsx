import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question3() {
  let items = ["Blub blub", "Let's go fishing!"];
  return (
    <div style={{ background: "purple", textAlign: "center", paddingTop: "50px"  }}>
      <ListGroup
        items={items}
        heading="It's a lake day! Would you rather go fishing or turn into a fish?"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question2">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/Question4">
        <Button color="primary" onClick={() => console.log()}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default Question3;
