
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import AllStudents from './components/AllStudents';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" exact component={AllStudents}/>
        <Route path="/add" exact component={AddStudent} />
      </div>
    </Router>
  );
}

export default App;
