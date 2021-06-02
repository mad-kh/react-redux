import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTask from "./Components/AddTask/AddTask";
import ListTask from "./Components/ListTask/ListTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
