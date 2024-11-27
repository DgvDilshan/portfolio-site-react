import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New york", "San Francisco", "tokyo", "London", "Paris"];
    
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
    return (
       
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        My alert
      </Alert>}
      
        <Button color="primary" onClick={() =>  setAlertVisibility(true)}>
          Submit
        </Button>
     
    </div>

  );
}

export default App;
