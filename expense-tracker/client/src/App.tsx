import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseTrackerForm from './components/ExpenseTrackerForm';
import ShowList from './components/ShowList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ExpenseTrackerForm onTrue={undefined} onClose={undefined} />}></Route>
          <Route path='/home' element={<ShowList />}></Route>
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
