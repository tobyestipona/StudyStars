import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question10() {
  let items = ["Noisy", "Too busy", "Unproductive", "Different interests", "Disorganized"];
  return (
    <div style={{ background: "purple", textAlign: "center", paddingTop: "50px"  }}>
      <ListGroup
        items={items}
        heading="What do you NOT want in a study partner"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question9">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/SelfProfile">
        <Button color="primary" onClick={() => console.log()}>
          Submit
        </Button>
      </Link>
    </div>
  );
}

export default Question10;
