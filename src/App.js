import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import '../src/styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/new' element={<h1>New</h1>} />
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>} />
          <Route path='edit' element={<h1>Edit</h1>} />
        </Route>
        <Route path='*' element={ <Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
