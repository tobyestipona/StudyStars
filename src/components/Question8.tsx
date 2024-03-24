import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question8() {
  let items = ["Telescope", "Food", "Chairs/Blanket", "Insect repellant", "Winging it"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="You and your partner are going stargazing. What are you priotizing?"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question7">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/Question9">
        <Button color="primary" onClick={() => console.log()}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default Question8;
