import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question10() {
  let items = ["Noisy", "Too busy", "Unproductive", "Different interests", "Disorganized"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="What do you NOT want in a study partnet"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question9">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
    </div>
  );
}

export default Question10;
