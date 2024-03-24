import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";

//REFERENCE
//   return (
//     <div>
//       {/* {alertVisible && <Alert type="secondary" onClose={() => setAlertVisibility(false)}>THERE IS A FIRE</Alert>}
//       <Button color="danger" onClick={() => setAlertVisibility(true)}>
//         FIRE ALARM
//       </Button> */}
//       <ListGroup items={items} heading="What star sign are you?" onSelectItem={handleSelectedItem}/>
//       <Button color="primary" onClick={() => handleSelectedItem}>Next</Button>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Question1" element={<Question1 />}/>
        <Route path="/Question2" element={<Question2 />}/>
        <Route path="/Question3" element={<Question3 />}/>
        {/* <Route path="/Question4" element={<Question4 />}/>
        <Route path="/Question5" element={<Question5 />}/>
        <Route path="/Question6" element={<Question6 />}/>
        <Route path="/Question7" element={<Question7 />}/>
        <Route path="/Question8" element={<Question8 />}/>
        <Route path="/Question9" element={<Question9 />}/>
        <Route path="/Question10" element={<Question10 />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
