import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./Pages/HomePage";
import axios from 'axios';
import ProjectsPage from "./Pages/ProjectsPage";

axios.defaults.baseURL = "https://api.coronatracker.com/"
axios.defaults.params = {};


function App() {
  return (<>
    <div className="App">
      <DefaultHOC path="/" exact component={HomePage} />
      <DefaultHOC path="/projects" exact component={ProjectsPage}/>
    </div>
    </>
  );
}

export default App;
