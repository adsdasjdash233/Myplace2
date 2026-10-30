import './App.css';
import { Routes, Route } from 'react-router';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Users from './components/Users';
import Test from './components/Test';

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App; 