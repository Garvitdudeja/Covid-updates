import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./Pages/HomePage";
import axios from 'axios';
import ProjectsPage from "./Pages/ProjectsPage";
import './App.css'
import ContactsPage from "./Pages/ContactsPage";
import AboutMePage from "./Pages/AboutMePage";


axios.defaults.baseURL = "https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions/"
axios.defaults.params = {};


function App() {
  return (<>
    <div className="App">
      <DefaultHOC path="/" exact component={HomePage} />
      <DefaultHOC path="/projects" exact component={ProjectsPage}/>
      <DefaultHOC path="/contactUs" exact component={ContactsPage}/>
      <DefaultHOC path="/aboutMe" exact component={AboutMePage}/>
    </div>
    </>
  );
}

export default App;
