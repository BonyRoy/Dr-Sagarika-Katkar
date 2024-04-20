import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
