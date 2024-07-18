
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Nav from './components/Nav';
import AddFood from './components/AddFood';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import SearchFood from './components/SearchFood';
import Food from './components/Food';
import FoodReport from './components/FoodReport';
import Contact from './components/Contact';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <h2>FOOD APP</h2>
     <Nav/>
     <Routes>
        <Route path="/food" element={<Food/>}>
      <Route path="fr" element={<FoodReport/>}/>
      <Route path="delf" element={<DeleteFood/>}/>
      <Route path="updf" element={<UpdateFood/>}/>
      <Route path="serf" element={<SearchFood/>}/>
      </Route>
        </Routes>
    </div>
  );
}

export default App;
