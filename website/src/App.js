import './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Instructors from './Instructors/Instructors';
import FemalePrep from './Camps/FemalePrep/FemalePrep';
import Camps from './Camps/Camps';
import RepPrep from './Camps/RepPrep/RepPrep';
import ScottJones from './Camps/ScottJones/ScottJones';
import SpringKickOff from './SpringKickOff/SpringKickOff';
import Alumni from './Alumni/Alumni';
import Contact from './Contact/Contact';

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

          <Route path="/spring-kick-off" element={<SpringKickOff />} />

          <Route path="/alumni" element={<Alumni />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
