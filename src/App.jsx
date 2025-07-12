import './App.css'
import Body from './body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header'
import Contact from './Email';

function App() {
 

  return (
    <>
     
  <Router basename="/Portfolio">
  <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>

    </>
  )
}

export default App
