import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question4() {
  let items = ["Bear", "Giant Crab"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Would you rather fight a bear or a giant crab?"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question3">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/Question5">
        <Button color="primary" onClick={() => console.log()}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default Question4;
