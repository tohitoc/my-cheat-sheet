import Sheets from './Sheets.jsx'
import Login from './Login.jsx'
import Commands from './Commands.jsx'
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Sheets />} />
      <Route path='/:sheetName' element={<Commands />} />
    </Routes>
  );
}

export default App
