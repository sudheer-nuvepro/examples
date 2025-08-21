import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="app-root" className="app__root">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div id="route-home-wrapper" className="app__route-wrapper">
                <Home />
              </div>
            }
          />
          <Route
            path="/add-contact"
            element={
              <div id="route-add-contact-wrapper" className="app__route-wrapper">
                <AddContact />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
