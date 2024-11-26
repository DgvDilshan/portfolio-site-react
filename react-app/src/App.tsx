import Alert from "./components/Alert";
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
     
    </div>

  );
}

export default App;
