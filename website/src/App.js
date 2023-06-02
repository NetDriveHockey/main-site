import './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Instructors from './Instructors/Instructors';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
