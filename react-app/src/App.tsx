import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New york", "San Francisco", "tokyo", "London", "Paris"];
    
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
    return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert>
        Hello world
      </Alert>
      
        <Button color="primary" onClick={() => console.log('clicked')}>
          Submit
        </Button>
     
    </div>

  );
}

export default App;
