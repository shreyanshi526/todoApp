import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css'
import AddTodo from './AddTodo';
import AppBar from './AppBar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ListTodo from './ListTodo';




function App() {


  return (
    <>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}>
        <AppBar></AppBar>

        <Router>
          <Routes>
            <Route path="/" element={<AddTodo />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/List" element={<ListTodo/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

// function Todo(props) {
//   // Add a delete button here so user can delete a TODO.
//   return <div>
//     {props.title}
//   </div>
// }

export default App
