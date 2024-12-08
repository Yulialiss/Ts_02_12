import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Login';
import Main from './Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
