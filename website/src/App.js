import './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Instructors from './Instructors/Instructors';
import FemalePrep from './Camps/FemalePrep/FemalePrep';
import Camps from './Camps/Camps';
import RepPrep from './Camps/RepPrep/RepPrep';
import ScottJones from './Camps/ScottJones/ScottJones';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="instructors" element={<Instructors />} />

          <Route path="/camps">
            <Route index element={<Camps/>  } />
            <Route path="female-prep" element={<FemalePrep />} />
            <Route path="rep-prep" element={<RepPrep />} />
            <Route path="scott-jones" element={<ScottJones />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
