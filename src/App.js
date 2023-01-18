import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AddNewHabit from "./pages/add";
import HabitDetails from "./pages/habitDetails";

import '../src/styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/new' element={<AddNewHabit />} />
        <Route path='/habit/:id'>
          <Route index element={<HabitDetails />} />
          <Route path='edit' element={<h1>Edit</h1>} />
        </Route>
        <Route path='*' element={ <Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
